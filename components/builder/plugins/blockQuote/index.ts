import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    Components.addType(ComponentTypes.CaBlockQuote, {
        isComponent: (el: HTMLElement) => {
            if (el && el.classList) return el.classList.contains(ComponentClasses.CaBlockQuote);
        },
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
        media: `<svg data-wf-icon="AddPanelBlockquote64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 22C16.4477 22 16 22.4477 16 23V28.5C16 28.6326 16.0527 28.7598 16.1464 28.8536L21.1464 33.8536L21.8536 33.1464L17.7071 29H22C22.5523 29 23 28.5523 23 28V23C23 22.4477 22.5523 22 22 22H17ZM17 23V28H22V23H17Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26 22C25.4477 22 25 22.4477 25 23V28.5C25 28.6326 25.0527 28.7598 25.1464 28.8536L30.1464 33.8536L30.8536 33.1464L26.7071 29H31C31.5523 29 32 28.5523 32 28V23C32 22.4477 31.5523 22 31 22H26ZM26 23V28H31V23H26Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 39L48 39V38L16 38V39ZM16 45L32 45V44L16 44V45Z" fill="white" fill-opacity="0.22"></path></svg>`,
        content: {
            type: ComponentTypes.CaBlockQuote
        },
        select: true
    });
}

export default plugin;