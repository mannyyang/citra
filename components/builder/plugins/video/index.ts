import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;


    Components.addType(ComponentTypes.CaVideo, {
        extend: 'video',
        isComponent: (el: HTMLElement) => {
            if (el && el.classList) {
                return el.classList.contains(ComponentClasses.CaVideo);
            }
        },
        model: {
            defaults: {
                classes: [ComponentClasses.CaVideo],
                provider: 'so',
                'change:provider': 'updateProvider',
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
        media: `<svg data-wf-icon="AddPanelVideoUrl64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.7773 23.4525C26.4451 23.2309 26 23.4691 26 23.8685V40.1315C26 40.5308 26.4451 40.769 26.7774 40.5475L38.9746 32.416C39.2714 32.2181 39.2714 31.7819 38.9746 31.5839L26.7773 23.4525ZM25 23.8685C25 22.6704 26.3352 21.9559 27.332 22.6204L39.5293 30.7519C40.4199 31.3456 40.4199 32.6543 39.5293 33.248L27.3321 41.3795C26.3352 42.0441 25 41.3295 25 40.1315V23.8685Z" fill="currentColor"></path></svg>`,
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
