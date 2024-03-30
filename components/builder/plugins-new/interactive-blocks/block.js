import { BuilderBlock } from "../enum";
import { exportedSVG } from "../icons";

// @ts-nocheck
export default (editor) => {
  editor.BlockManager.add(BuilderBlock.FLIP_CARDS_3D.id, {
    category: 'Premium',
    label: BuilderBlock.FLIP_CARDS_3D.name,
    media: exportedSVG['flipCards3D'],
    content: {
      type: BuilderBlock.FLIP_CARDS_3D.id
    }
  });

  editor.BlockManager.add(BuilderBlock.FLIP_CARDS.id, {
    category: 'Premium',
    label: BuilderBlock.FLIP_CARDS.name,
    media: exportedSVG['flipCards'],
    content: {
      type: BuilderBlock.FLIP_CARDS.id
    }
  });

  editor.BlockManager.add(BuilderBlock.CAROUSEL.id, {
    category: 'Premium',
    label: BuilderBlock.CAROUSEL.name,
    media: exportedSVG['carousel'],
    content: {
      type: BuilderBlock.CAROUSEL.id
    }
  });

  editor.BlockManager.add(BuilderBlock.SOCIAL_CARDS.id, {
    category: 'Premium',
    label: BuilderBlock.SOCIAL_CARDS.name,
    media: exportedSVG['socialCards'],
    content: {
      type: BuilderBlock.SOCIAL_CARDS.id
    }
  });
};
