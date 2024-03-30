import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    Components.addType(BuilderComponent.YOUTUBE.id, {
        isComponent: (el: HTMLElement) => isComponent(el, BuilderComponent.YOUTUBE.id),
        extend: 'video',
        model: {
            defaults: {
                classes: [BuilderComponent.YOUTUBE.class],
                provider: 'yt',
                'change:provider': 'updateProvider',
                attributes: {
                    'data-ca': BuilderComponent.YOUTUBE.id
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
                        { value: 'yt', name: 'Youtube' },
                        { value: 'ytnc', name: 'Youtube (no cookie)' },
                    ],
                };
            }
        }
    });

    BlockManager.add(BuilderBlock.YOUTUBE.id, {
        category: 'Media',
        label: BuilderBlock.YOUTUBE.name,
        media: exportedSVG['youtube'],
        content: {
            type: BuilderComponent.YOUTUBE.id,
            style: {
                width: '100%',
                height: 'auto'
            },
        },
    });
};

export default plugin;
