import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;

    Components.addType(ComponentTypes.CaYoutube, {
        isComponent: (el: HTMLElement) => isComponent(el, ComponentTypes.CaYoutube),
        extend: 'video',
        model: {
            defaults: {
                classes: [ComponentClasses.CaYoutube],
                provider: 'yt',
                'change:provider': 'updateProvider',
                attributes: {
                    'data-ca': ComponentTypes.CaYoutube
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

    BlockManager.add(BlockIdentifies.Youtube, {
        category: 'Media',
        label: 'Youtube',
        media: exportedSVG['youtube'],
        content: {
            type: ComponentTypes.CaYoutube,
            style: {
                width: '100%',
                height: 'auto'
            },
        },
    });
};

export default plugin;
