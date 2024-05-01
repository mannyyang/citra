import type { Editor } from 'grapesjs';
import type { RequiredPluginOptions } from '.';

import { exportedSVG } from '../icons';
import {
  cmdClear,
  cmdCreateFonts,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  cmdImport,
  cmdPublish
} from './consts';

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor;
  const config = editor.getConfig();
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';

  config.showDevices = false;

  Panels.getPanels().reset([
    {
      id: 'commands',
      buttons: [{}]
    },
    {
      id: 'devices-c',
      buttons: [
        {
          id: cmdDeviceDesktop,
          command: cmdDeviceDesktop,
          active: true,
          label: exportedSVG['panelDeviceDesktop']
        },
        {
          id: cmdDeviceTablet,
          command: cmdDeviceTablet,
          label: exportedSVG['panelDeviceTablet']
        },
        {
          id: cmdDeviceMobile,
          command: cmdDeviceMobile,
          label: exportedSVG['panelDeviceMobile']
        },
        {
          id: cmdCreateFonts,
          label: exportedSVG['fontsDialogButton'],
          command: (editor:Editor)=> {
            editor.runCommand("open-google-fonts");
          },                    
        }
      ]
    },
    {
      id: 'options',
      buttons: [
        {
          id: swv,
          command: swv,
          context: swv,
          label: exportedSVG['panelSWV']
        },
        {
          id: prv,
          context: prv,
          command: () => editor.runCommand(prv),
          label: exportedSVG['panelPRV']
        },
        {
          id: ful,
          command: ful,
          context: ful,
          label: exportedSVG['panelFUL']
        },
        {
          id: expt,
          command: () => editor.runCommand(expt),
          label: exportedSVG['panelEXPT']
        },
        {
          id: 'undo',
          command: () => editor.runCommand('core:undo'),
          label: exportedSVG['panelUndo']
        },
        {
          id: 'redo',
          command: () => editor.runCommand('core:redo'),
          label: exportedSVG['panelRedo']
        },
        {
          id: cmdImport,
          command: () => editor.runCommand(cmdImport),
          label: exportedSVG['panelImport']
        },
        {
          id: cmdClear,
          command: () => editor.runCommand(cmdClear),
          label: exportedSVG['panelClear']
        },
        {
          id: cmdPublish,
          command: () => editor.runCommand(cmdPublish),          
          label: `<div class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 pt-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">${exportedSVG['publishButton']}Publish</div>`,          
        }
      ]
    },
    {
      id: 'views',
      buttons: [
        {
          id: osm,
          command: osm,
          active: true,
          label: exportedSVG['panelOSM']
        },
        {
          id: otm,
          command: otm,
          label: exportedSVG['panelOTM']
        },
        {
          id: ola,
          command: ola,
          label: exportedSVG['panelOLA']
        },
        {
          id: obl,
          command: obl,
          label: exportedSVG['panelOBL']
        }
      ]
    }
  ]);

  Panels.getButton('options', 'sw-visibility')?.set('active', 1);  
  
  const openBl = Panels.getButton('views', obl);
  editor.on('load', () => openBl?.set('active', true));

  // On component change show the Style Manager
  opts.showStylesOnChange &&
    editor.on('component:selected', () => {
      const openSmBtn = Panels.getButton('views', osm);
      const openLayersBtn = Panels.getButton('views', ola);

      // Don't switch when the Layer Manager is on or
      // there is no selected component
      if (
        (!openLayersBtn || !openLayersBtn.get('active')) &&
        editor.getSelected()
      ) {
        openSmBtn?.set('active', true);
      }
    });
};
