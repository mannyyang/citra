import { type Editor, type Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';



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
        isComponent: (el: HTMLElement) => {
            if (el && el.classList) return el.classList.contains(ComponentClasses.CaCell);
        },
        model: {
            defaults: {
                classes: [ComponentClasses.CaCell],
            }
        }
    })

    Components.addType(ComponentTypes.CaRow, {
        isComponent: (el: HTMLElement) => {
            if (el && el.classList) return el.classList.contains(ComponentClasses.CaRow);
        },
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
                attributes: { type: 'one' },
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
        category: 'Other',
        label: 'Column',
        media: `<svg data-wf-icon="AddPanelRow64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H53C54.1046 13 55 13.8954 55 15V49C55 50.1046 54.1046 51 53 51H11C9.89543 51 9 50.1046 9 49V15C9 13.8954 9.89543 13 11 13ZM8 15C8 13.3431 9.34315 12 11 12H53C54.6569 12 56 13.3431 56 15V49C56 50.6569 54.6569 52 53 52H11C9.34315 52 8 50.6569 8 49V15ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17ZM15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17ZM19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16Z" fill="white" fill-opacity="0.22"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 20H32V48H18V20ZM32 49H18C17.4477 49 17 48.5523 17 48V20C17 19.4477 17.4477 19 18 19H32H33H47C47.5523 19 48 19.4477 48 20V48C48 48.5523 47.5523 49 47 49H33H32ZM33 20V48H47V20H33Z" fill="currentColor"></path></svg>`,
        content: `<div ${attrsRow}><div ${attrsCell}></div></div><style>${styleRow}${styleClm}${styleClm1}${styleClm2}</style>`,
        select: true
    });
};

export default plugin;
