import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory } from '../enum';
import { exportedSVG } from '../icons';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;

  BlockManager.add(BuilderBlock.LINK.id, {
    category: BuilderCategory.TYPOGRAPHY,
    label: BuilderBlock.LINK.name,
    activate: true,
    select: true,
    media: exportedSVG['link'],
    content: {
      type: BuilderBlock.LINK.id,
      content: 'Link',
      style: { color: '#d983a6' }
    }
  });
};

export default plugin;
