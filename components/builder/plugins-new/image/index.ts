import type { Editor, Plugin } from 'grapesjs';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;

  BlockManager.add('image', {
    category: 'Media',
    label: 'Image',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
    content: {
      style: { color: 'black' },
      type: 'image'
    },
    activate: true
  });
};

export default plugin;
