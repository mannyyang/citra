import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;


    Components.addType(BuilderComponent.VIDEO.id, {
        extend: 'video',
        isComponent: (el: HTMLElement) => isComponent(el, BuilderComponent.VIDEO.id),
        model: {
            defaults: {
                classes: [BuilderComponent.VIDEO.class],
                provider: 'so',
                'change:provider': 'updateProvider',
                attributes: {
                    'data-ca': BuilderComponent.VIDEO.id
                }
            },

            updateProvider() {
                const { em } = this;
                const prov = this.get('provider');
                const tagName = 'video';
                const traits = this.getSourceTraits();

                this.set({ tagName }, { silent: true }); // avoid break in view
                // @ts-ignore
                this.set({ traits });
                em.get('ready') && em.trigger('component:toggled');
            },

            getSourceTraits() {
                return [
                    this.getProviderTrait(),
                    {
                        label: 'Source',
                        name: 'src',
                        placeholder: 'eg. ./media/video.mp4',
                        changeProp: true,
                    },
                    {
                        label: 'Poster',
                        name: 'poster',
                        placeholder: 'eg. ./media/image.jpg',
                    },
                    this.getAutoplayTrait(),
                    this.getLoopTrait(),
                    this.getControlsTrait(),
                ];
            },

            getProviderTrait() {
                return {
                    type: 'select',
                    label: 'Provider',
                    name: 'provider',
                    changeProp: true,
                    options: [
                        { value: 'so', name: 'HTML5 Source' },
                    ],
                };
            }
        }
    });

    BlockManager.add(BuilderBlock.VIDEO.id, {
        category: 'Media',
        label: BuilderBlock.VIDEO.name,
        media: exportedSVG['video'],
        content: {
            type: BuilderComponent.VIDEO.id,
            controls: true,
            style: {
                width: '100%',
                height: 'auto'
            },
        },
    });
};

export default plugin;
