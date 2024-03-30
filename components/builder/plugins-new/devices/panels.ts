import type { Editor } from 'grapesjs';
import type { RequiredPluginOptions } from '.';

import { exportedSVG } from '../icons';
import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  cmdImport
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
          label: exportedSVG['pannelDeviceDesktop']
        },
        {
          id: cmdDeviceTablet,
          command: cmdDeviceTablet,
          label: exportedSVG['pannelDeviceTablet']
        },
        {
          id: cmdDeviceMobile,
          command: cmdDeviceMobile,
          label: exportedSVG['pannelDeviceMobile']
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
          label: exportedSVG['pannelSWV']
        },
        {
          id: prv,
          context: prv,
          command: () => editor.runCommand(prv),
          label: exportedSVG['pannelPRV']
        },
        {
          id: ful,
          command: ful,
          context: ful,
          label: exportedSVG['pannelFUL']
        },
        {
          id: expt,
          command: () => editor.runCommand(expt),
          label: exportedSVG['pannelEXPT']
        },
        {
          id: 'undo',
          command: () => editor.runCommand('core:undo'),
          label: exportedSVG['pannelUndo']
        },
        {
          id: 'redo',
          command: () => editor.runCommand('core:redo'),
          label: exportedSVG['pannelRedo']
        },
        {
          id: cmdImport,
          command: () => editor.runCommand(cmdImport),
          label: exportedSVG['pannelImport']
        },
        {
          id: cmdClear,
          command: () => editor.runCommand(cmdClear),
          label: exportedSVG['pannelClear']
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
          label: exportedSVG['pannelOSM']
        },
        {
          id: otm,
          command: otm,
          label: exportedSVG['pannelOTM']
        },
        {
          id: ola,
          command: ola,
          label: exportedSVG['pannelOLA']
        },
        {
          id: obl,
          command: obl,
          label: exportedSVG['pannelOBL']
        }
      ]
    }
  ]);

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
