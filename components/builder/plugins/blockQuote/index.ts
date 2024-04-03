import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    Components.addType(BuilderComponent.BLOCK_QUOTE.id, {
        isComponent: (el) => isComponent(el, BuilderComponent.BLOCK_QUOTE.id),
        extend: 'text',
        model: {
            defaults: {
                classes: [BuilderComponent.BLOCK_QUOTE.class],
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
                attributes: {
                    'data-ca': BuilderComponent.BLOCK_QUOTE.id
                }
            }
        },
    });

    BlockManager.add(BuilderBlock.BLOCK_QUOTE.id, {
        category: BuilderCategory.TYPOGRAPHY.name,
        label: BuilderBlock.BLOCK_QUOTE.name,
        media: exportedSVG["blockQuote"],
        content: {
            type: BuilderComponent.BLOCK_QUOTE.id
        },
        select: true
    });
}

export default plugin;