import carousel from './blocks/carousel';
import flipCards from './blocks/flip-cards';
import flipCards3d from './blocks/flip-cards-3d';
import socialCards from './blocks/social-cards';

export default (editor) => {
  editor.Components.addType('flip-cards', {
    model: {
      defaults: {
        script: flipCards.script,
        styles: flipCards.styles,
        components: flipCards.content
      }
    }
  });

  editor.Components.addType('flip-cards-3d', {
    model: {
      defaults: {
        script: flipCards3d.script,
        styles: flipCards3d.styles,
        components: flipCards3d.content
      }
    }
  });

  editor.Components.addType('carousel', {
    model: {
      defaults: {
        script: carousel.script,
        styles: carousel.styles,
        components: carousel.content
      }
    }
  });

  editor.Components.addType('social-cards', {
    model: {
      defaults: {
        styles: socialCards.styles,
        components: socialCards.content
      }
    }
  });
};
