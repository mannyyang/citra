import { BuilderComponent } from '../enum';
import carousel from './blocks/carousel';
import flipCards from './blocks/flip-cards';
import flipCards3d from './blocks/flip-cards-3d';
import socialCards from './blocks/social-cards';

export default (editor) => {
  editor.Components.addType(BuilderComponent.FLIP_CARDS.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.FLIP_CARDS.id),
    model: {
      defaults: {
        script: flipCards.script,
        styles: flipCards.styles,
        components: flipCards.content,
        attributes: {
          'data-ca': BuilderComponent.FLIP_CARDS.id
        },
        classes: [BuilderComponent.FLIP_CARDS.class],
      }
    }
  });

  editor.Components.addType(BuilderComponent.FLIP_CARDS_3D.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.FLIP_CARDS_3D.id),
    model: {
      defaults: {
        script: flipCards3d.script,
        styles: flipCards3d.styles,
        components: flipCards3d.content,
        attributes: {
          'data-ca': BuilderComponent.FLIP_CARDS_3D.id
        },
        classes: [BuilderComponent.FLIP_CARDS_3D.class],
      }
    }
  });

  editor.Components.addType(BuilderComponent.CAROUSEL.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.CAROUSEL.id),
    model: {
      defaults: {
        script: carousel.script,
        styles: carousel.styles,
        components: carousel.content,
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL.id
        },
        classes: [BuilderComponent.CAROUSEL.class],
      }
    }
  });

  editor.Components.addType(BuilderComponent.SOCIAL_CARDS.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.CAROUSEL.id),
    model: {
      defaults: {
        styles: socialCards.styles,
        components: socialCards.content,
        attributes: {
          'data-ca': BuilderComponent.SOCIAL_CARDS.id
        },
        classes: [BuilderComponent.SOCIAL_CARDS.class],
      }
    }
  });
};
