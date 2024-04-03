import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory } from '../enum';
import { exportedSVG } from '../icons';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;

  BlockManager.add(BuilderBlock.TEXT.id, {
    category: BuilderCategory.TYPOGRAPHY.name,
    label: BuilderBlock.TEXT.name,
    activate: true,
    select: true,
    media: exportedSVG['text'],
    content: {
      type: BuilderBlock.TEXT.id,
      content: 'Insert your text here',
      style: { padding: '10px' }
    }
  });
};

export default plugin;
