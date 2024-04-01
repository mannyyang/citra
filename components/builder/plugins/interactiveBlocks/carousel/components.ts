import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Scrollbar]);


export const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerGroup: 2,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });


export const plugin: Plugin = (editor: Editor) => {
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
  