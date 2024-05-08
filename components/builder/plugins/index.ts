import { Editor } from 'grapesjs';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginCustomCode from 'grapesjs-custom-code';
import parserPostCSS from 'grapesjs-parser-postcss';
import pluginExport from 'grapesjs-plugin-export';
import pluginStyleBg from 'grapesjs-style-bg';
import pluginTabs from 'grapesjs-tabs';
import pluginToolip from 'grapesjs-tooltip';
import pluginTuiImageEditor from 'grapesjs-tui-image-editor';
import pluginTyped from 'grapesjs-typed';

import pluginBlockQuote from './block-quote';
import pluginButton from './button';
import pluginCarousel from './carousel';
import pluginColumn from './column';
import pluginDevices from './devices';
import pluginDiv from './div';
import pluginFlipCards from './flip-cards';
import pluginFlipCards3D from './flip-cards-3d';
import pluginFonts from './fonts';
import pluginHeading from './heading';
import pluginImage from './image';
import pluginLink from './link';
import pluginList from './list';
import pluginListItem from './list-item';
import pluginSocialCards from './social-cards';
import pluginText from './text';
import pluginVideo from './video';


const plugins = [
  (editor: Editor) =>
    pluginDevices(editor, {
      modalImportTitle: 'Import Template',
      modalImportLabel:
        '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
      modalImportContent: function (editor: Editor) {
        return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
      }
    }),
  (editor: Editor) => pluginFonts(editor, {
    api_key: "AIzaSyCDehD5ASGoh-9HOU1bGt9aOS01biDQ7FA",
  }),
  parserPostCSS,
  pluginStyleBg,

  // blocks
  pluginDiv,
  pluginLink,
  pluginList,
  pluginListItem,
  pluginText,
  pluginHeading,
  pluginColumn,
  pluginButton,
  pluginBlockQuote,

  pluginImage,
  pluginVideo,
  // pluginYoutube,
  pluginSocialCards,
  pluginToolip,
  pluginExport,
  pluginCustomCode,
  pluginCountdown,
  pluginFlipCards,
  pluginFlipCards3D,
  pluginCarousel,

  (editor: Editor) =>
    pluginTabs(editor, {
      tabsBlock: { category: 'Extra' }
    }),
  (editor: Editor) =>
    pluginTyped(editor, {
      block: {
        category: 'Extra',
        content: {
          type: 'typed',
          'type-speed': 40,
          strings: ['Text row one', 'Text row two', 'Text row three']
        }
      }
    }),
  (editor: Editor) =>
    pluginTuiImageEditor(editor, {
      script: [
        'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
        'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
        'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
      ],
      style: [
        'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
        'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css'
      ]
    })
];

export default plugins;