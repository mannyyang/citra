import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';
import carousel from './constants';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;
  const Components = editor.Components;

  Components.addType(BuilderComponent.CAROUSEL_IMAGE.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.CAROUSEL_IMAGE.id),
    model: {
      defaults: {
        type: BuilderComponent.DIV.id,
        name: BuilderComponent.CAROUSEL_IMAGE.name,
        classes: [BuilderComponent.CAROUSEL_IMAGE.class, 'swiper-slide'],
        components: [
          {
            type: BuilderBlock.IMAGE.id,
            src: 'https://picsum.photos/200/300'
          }
        ],
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL_IMAGE.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.CAROUSEL_WRAPPER.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.CAROUSEL_WRAPPER.id),
    model: {
      defaults: {
        type: BuilderComponent.DIV.id,
        name: BuilderComponent.CAROUSEL_WRAPPER.name,
        classes: [BuilderComponent.CAROUSEL_WRAPPER.class, 'swiper-wrapper'],
        components: [
          { type: BuilderComponent.CAROUSEL_IMAGE.id },
          { type: BuilderComponent.CAROUSEL_IMAGE.id },
          { type: BuilderComponent.CAROUSEL_IMAGE.id },
          { type: BuilderComponent.CAROUSEL_IMAGE.id }
        ],
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL_WRAPPER.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.CAROUSEL_SWIPER_ITEM.id, {
    isComponent: (el) =>
      isComponent(el, BuilderComponent.CAROUSEL_SWIPER_ITEM.id),
    model: {
      defaults: {
        type: BuilderBlock.DIV.id,
        name: BuilderComponent.CAROUSEL_SWIPER_ITEM.name,
        classes: [BuilderComponent.CAROUSEL_SWIPER_ITEM.class],
        components: [{ type: BuilderComponent.CAROUSEL_WRAPPER.id }],
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL_SWIPER_ITEM.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.CAROUSEL_SWIPER_CONTAINER.id, {
    isComponent: (el) =>
      isComponent(el, BuilderComponent.CAROUSEL_SWIPER_CONTAINER.id),
    model: {
      defaults: {
        type: BuilderBlock.DIV.id,
        name: BuilderComponent.CAROUSEL_SWIPER_CONTAINER.name,
        classes: [
          BuilderComponent.CAROUSEL_SWIPER_CONTAINER.class
        ],
        components: [{ type: BuilderComponent.CAROUSEL_SWIPER_ITEM.id }],
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL_SWIPER_CONTAINER.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.CAROUSEL_LEFT_BUTTON.id, {
    isComponent: (el) =>
      isComponent(el, BuilderComponent.CAROUSEL_LEFT_BUTTON.id),
    model: {
      defaults: {
        type: BuilderComponent.DIV.id,
        name: BuilderComponent.CAROUSEL_LEFT_BUTTON.name,
        classes: [
          BuilderComponent.CAROUSEL_LEFT_BUTTON.class
        ],
        components: [
          {
            type: BuilderComponent.BUTTON.id,
            classes: [BuilderComponent.CAROUSEL_GLIDE_ARROW.class, `${BuilderComponent.CAROUSEL_GLIDE_ARROW.class}--left`],
            content: exportedSVG['carouselLeftButton']
          }
        ],
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL_LEFT_BUTTON.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.CAROUSEL_RIGHT_BUTTON.id, {
    isComponent: (el) =>
      isComponent(el, BuilderComponent.CAROUSEL_RIGHT_BUTTON.id),
    model: {
      defaults: {
        type: BuilderComponent.DIV.id,
        name: BuilderComponent.CAROUSEL_RIGHT_BUTTON.name,
        classes: [
          BuilderComponent.CAROUSEL_RIGHT_BUTTON.class
        ],
        components: {
          type: BuilderComponent.BUTTON.id,
          classes: [BuilderComponent.CAROUSEL_GLIDE_ARROW.class, `${BuilderComponent.CAROUSEL_GLIDE_ARROW.class}--right`],
          content: exportedSVG['carouselRightButton']
        },
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL_RIGHT_BUTTON.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.CAROUSEL.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.CAROUSEL.id),
    model: {
      defaults: {
        script: carousel.script,
        styles: carousel.styles,
        components: [
          {
            name: BuilderComponent.CAROUSEL_CONTAINER.name,
            classes: [BuilderComponent.CAROUSEL_CONTAINER.class],
            components: [
              { type: BuilderComponent.CAROUSEL_SWIPER_CONTAINER.id },
              { type: BuilderComponent.CAROUSEL_LEFT_BUTTON.id },
              { type: BuilderComponent.CAROUSEL_RIGHT_BUTTON.id }
            ]
          }
        ],
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL.id
        },
        classes: [BuilderComponent.CAROUSEL.class],
        traits: [
          {
            label: 'Slides Per Group',
            name: 'slidesPerGroup',
            type: 'number',
            changeProp: true
          },
          {
            label: 'Slides Per View',
            name: 'slidesPerView',
            type: 'number',
            changeProp: true
          }
        ],
        slidesPerGroup: 1,
        slidesPerView: 1
      },
      init() {
        this.listenTo(this, 'change:slidesPerGroup', () => this.updateSlides());
        this.listenTo(this, 'change:slidesPerView', () => this.updateSlides());
      },
      updateSlides() {
        this.view?.render();
      }
    }
  });

  BlockManager.add(BuilderBlock.CAROUSEL.id, {
    category: BuilderCategory.INTERACTIVE,
    label: BuilderBlock.CAROUSEL.name,
    media: exportedSVG['carousel'],
    content: {
      type: BuilderBlock.CAROUSEL.id
    }
  });
};

export default plugin;
