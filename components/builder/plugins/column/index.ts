import { type Editor, type Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';
import { isComponent } from '../util';


const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    const flexGrid = false;
    const rowHeight = 75;
    const clsRow = ComponentClasses.CaRow;
    const clsCell = ComponentClasses.CaCell;
    const styleRow = flexGrid
        ? `
        .${clsRow} {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            flex-wrap: nowrap;
            padding: 10px;
        }
        @media (max-width: 768px) {
            .${clsRow} {
                flex-wrap: wrap;
            }
        }`
        : `
        .${clsRow} {
            display: table;
            padding: 10px;
            width: 100%;
        }
        @media (max-width: 768px) {
            .${ComponentClasses.CaCell}, .${ComponentClasses.CaCell}33, .${ComponentClasses.CaCell}67 {
                width: 100%;
                display: block;
            }
        }`;

    const styleClm = flexGrid
        ? `
        .${clsCell} {
            min-height: ${rowHeight}px;
            flex-grow: 1;
            flex-basis: 100%;
        }`
        : `
        .${clsCell} {
            width: 8%;
            display: table-cell;
            height: ${rowHeight}px;
        }`;

    const styleClm1 = `
        .${ComponentClasses.CaCell}33 {
            width: 33%;
        }`;
    const styleClm2 = `
        .${ComponentClasses.CaCell}67 {
            width: 67%;
        }`;
    const step = 0.2;
    const minDim = 1;
    const currentUnit = 1;

    const resizerBtm: Record<string, any> = {
        tl: 0,
        tc: 0,
        tr: 0,
        cl: 0,
        cr: 0,
        bl: 0,
        br: 0,
        minDim
    };
    const resizerRight: Record<string, any> = {
        ...resizerBtm,
        cr: 1,
        bc: 0,
        currentUnit,
        minDim,
        step
    };

    const rowAttr = {
        class: clsRow,
        'data-gjs-droppable': `.${clsCell}`,
        'data-gjs-resizable': resizerBtm,
        'data-gjs-name': ComponentTypes.CaRow
    };

    const colAttr: Record<string, any> = {
        class: clsCell,
        'data-gjs-draggable': `.${clsRow}`,
        'data-gjs-resizable': resizerRight,
        'data-gjs-name': ComponentTypes.CaCell
    };

    const privateCls = [`.${clsRow}`, `.${clsCell}`];
    editor.on(
        'selector:add',
        selector =>
            privateCls.indexOf(selector.getFullName()) >= 0 &&
            selector.set('private', 1)
    );

    const attrsToString = (attrs: Record<string, any>) => {
        const result = [];

        for (let key in attrs) {
            let value = attrs[key];
            const toParse = value instanceof Array || value instanceof Object;
            value = toParse ? JSON.stringify(value) : value;
            result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
        }

        return result.length ? ` ${result.join(' ')}` : '';
    };

    const attrsRow = attrsToString(rowAttr);
    const attrsCell = attrsToString(colAttr);

    Components.addType(ComponentTypes.CaCell, {
        isComponent: (el: HTMLElement) => isComponent(el, ComponentTypes.CaCell),
        model: {
            defaults: {
                classes: [ComponentClasses.CaCell],
                attributes: {
                    'data-ca': ComponentTypes.CaCell
                }
            }
        }
    })

    Components.addType(ComponentTypes.CaRow, {
        isComponent: (el: HTMLElement) => isComponent(el, ComponentTypes.CaRow),
        model: {
            defaults: {
                classes: [ComponentClasses.CaRow],
                traits: [
                    {
                        type: 'select',
                        name: 'type',
                        label: 'Columns',
                        options: [
                            { id: 'one', label: '1 Column' },
                            { id: 'two', label: '2 Columns' },
                            { id: 'three', label: '3 Columns' },
                            { id: 'one_two', label: '1-2 Columns' },
                            { id: 'two_one', label: '2-1 Columns' },
                        ]
                    }
                ],
                attributes: {
                    'data-ca': ComponentTypes.CaRow,
                    type: 'one'
                },
            },

            init() {
                this.on('change:attributes:type', this.handleColumnChange);
            },


            handleColumnChange() {
                const childComponents = editor.getSelected()?.components();
                if (childComponents) {
                    let counts = 1;

                    for (let i = 0; i < childComponents.length; i++) {
                        if (childComponents.at(i).components().length > 0) {
                            continue;
                        } else {
                            childComponents.at(i).remove();
                            i -= 1;
                        }
                    }


                    switch (this.getAttributes().type) {
                        case 'one':
                            counts = 1;
                            break;
                        case 'two':
                        case 'one_two':
                        case 'two_one':
                            counts = 2;
                            break;
                        case 'three':
                            counts = 3;
                            break;
                    }
                    const baseId = childComponents.length;
                    counts -= baseId;

                    for (let i = 0; i < counts; i++) {
                        childComponents.add({
                            type: ComponentTypes.CaCell,
                        })

                        if (counts === 2) {
                            if (('one_two' === this.getAttributes().type && i === 0) || ('two_one' === this.getAttributes().type && i === 1)) {
                                childComponents.at(baseId + i).setStyle(flexGrid ? { 'flex-basis': '33%' } : { 'width': '33%' })
                            }

                            if (('one_two' === this.getAttributes().type && i === 1) || ('two_one' === this.getAttributes().type && i === 0)) {
                                childComponents.at(baseId + i).setStyle(flexGrid ? { 'flex-basis': '67%' } : { 'width': '67%' })
                            }
                        }
                    }
                }
            }
        }
    });

    BlockManager.add(BlockIdentifies.Column, {
        category: 'Basic',
        label: 'Column',
        media: exportedSVG['column'],
        // TODO: update to use json style
        content: `<div ${attrsRow}><div ${attrsCell}></div></div><style>${styleRow}${styleClm}${styleClm1}${styleClm2}</style>`,
        select: true
    });
};

export default plugin;
