import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock } from '../enum';
import { exportedSVG } from '../icons';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;

  BlockManager.add(BuilderBlock.IMAGE.id, {
    category: 'Media',
    label: BuilderBlock.IMAGE.name,
    media: exportedSVG['image'],
    content: {
      style: { color: 'black' },
      type: 'image'
    },
    activate: true
  });
};

export default plugin;
