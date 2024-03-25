import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;


    Components.addType(ComponentTypes.CaVideo, {
        extend: 'video',
        isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaVideo.toLowerCase(),
        model: {
            defaults: {
                classes: [ComponentClasses.CaVideo],
                provider: 'so',
                'change:provider': 'updateProvider'
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

    BlockManager.add(BlockIdentifies.Video, {
        category: 'Media',
        label: 'Video',
        media: exportedSVG['video'],
        content: {
            type: ComponentTypes.CaVideo,
            controls: true,
            style: {
                width: '100%',
                height: 'auto'
            },
        },
    });
};

export default plugin;
