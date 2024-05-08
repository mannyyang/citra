import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    Components.addType(BuilderComponent.PARAGRAPH.id, {
        isComponent: (el) => isComponent(el, BuilderComponent.PARAGRAPH.id),
        extend: 'text',
        model: {
            defaults: {
                classes: [BuilderComponent.PARAGRAPH.class],
                tagName: 'p',
                droppable: false,
                style: {
                    padding: '4px',
                    'box-sizing': 'border-box',
                    resize: 'vertical',
                    width: '100%',
                    background: 'transparent',
                },
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
                attributes: {
                    'data-ca': BuilderComponent.PARAGRAPH.id
                }
            }
        }
    });

    BlockManager.add(BuilderBlock.PARAGRAPH.id, {
        category: BuilderCategory.TYPOGRAPHY,
        label: BuilderBlock.PARAGRAPH.name,
        media: exportedSVG['paragraph'],
        content: {
            type: BuilderComponent.PARAGRAPH.id
        },
        select: true
    });
};

export default plugin;
