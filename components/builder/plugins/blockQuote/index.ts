import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from "../icons";
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    Components.addType(ComponentTypes.CaBlockQuote, {
        isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaBlockQuote.toLowerCase(),
        extend: 'text',
        model: {
            defaults: {
                classes: [ComponentClasses.CaBlockQuote],
                tagName: 'div',
                droppable: false,
                style: {
                    'white-space': 'pre-wrap',
                    margin: '0 0 10px 0',
                    padding: '10px 20px',
                    'border-left': '5px solid #E2E2E2',
                    'font-size': '18px',
                    'line-height': '22px'
                },
                content: 'Block Quote',
            }
        }
    });

    BlockManager.add(BlockIdentifies.BlockQuote, {
        category: 'Typography',
        label: 'Block Quote',
        media: exportedSVG["blockQuote"],
        content: {
            type: ComponentTypes.CaBlockQuote
        },
        select: true
    });
}

export default plugin;