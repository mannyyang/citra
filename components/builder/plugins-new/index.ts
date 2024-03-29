import { Editor } from 'grapesjs';
// import * as pluginCountdown from 'grapesjs-component-countdown';
// import * as pluginCustomCode from 'grapesjs-custom-code';
import * as pluginPostCss from 'grapesjs-parser-postcss';
// import * as pluginExport from 'grapesjs-plugin-export';
// import * as pluginStyleBg from 'grapesjs-style-bg';
// import * as pluginTabs from 'grapesjs-tabs';
// import * as pluginToolip from 'grapesjs-tooltip';
// import * as pluginTuiImageEditor from 'grapesjs-tui-image-editor';
// import * as pluginTyped from 'grapesjs-typed';
// import * as pluginButton from './button';
// import * as pluginColumn from './column';
// import * as pluginCustomBlocks from './custom-blocks';
// import * as pluginDevices from './devices';
// import * as pluginDiv from './div';
// import * as pluginImage from './image';
// import * as pluginInteractiveBlocks from './interactive-blocks';
// import * as pluginLink from './link';
// import * as pluginList from './list';
// import * as pluginListItem from './list-item';
// import * as pluginText from './text';
// import * as pluginUserBlocks from './user-blocks';


const plugins = [
  (editor: Editor) =>
    // pluginDevices.default(editor, {
    //   modalImportTitle: 'Import Template',
    //   modalImportLabel:
    //     '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
    //   modalImportContent: function (editor: Editor) {
    //     return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
    //   }
    // }),
  pluginPostCss,
  // pluginStyleBg,
  // pluginToolip,
  // pluginExport,
  // pluginCustomCode,
  // pluginCountdown,
  // // blocks
  // pluginButton,
  // pluginColumn,
  // pluginCustomBlocks,
  // pluginDiv,
  // pluginImage,
  // pluginInteractiveBlocks,
  // pluginLink,
  // pluginList,
  // pluginListItem,
  // pluginText,
  // pluginUserBlocks,

  // (editor: Editor) =>
  //   pluginTabs(editor, {
  //     tabsBlock: { category: 'Extra' }
  //   }),
  // (editor: Editor) =>
  //   pluginTyped.default(editor, {
  //     block: {
  //       category: 'Extra',
  //       content: {
  //         type: 'typed',
  //         'type-speed': 40,
  //         strings: ['Text row one', 'Text row two', 'Text row three']
  //       }
  //     }
  //   }),
  // (editor: Editor) =>
  //   pluginTuiImageEditor.default(editor, {
  //     script: [
  //       'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
  //       'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
  //       'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
  //     ],
  //     style: [
  //       'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
  //       'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css'
  //     ]
  //   })
];

export default plugins;