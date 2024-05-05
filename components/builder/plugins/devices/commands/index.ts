import type { Editor } from 'grapesjs';
import type { RequiredPluginOptions } from '..';
import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  cmdPublish
} from './../consts';
import openImport from './openImport';

export default (editor: Editor, config: RequiredPluginOptions) => {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;

  openImport(editor, config);

  Commands.add(cmdDeviceDesktop, {
    run: (ed) => ed.setDevice('Desktop'),
    stop: () => { }
  });
  Commands.add(cmdDeviceTablet, {
    run: (ed) => ed.setDevice('Tablet'),
    stop: () => { }
  });
  Commands.add(cmdDeviceMobile, {
    run: (ed) => ed.setDevice('Mobile portrait'),
    stop: () => { }
  });
  Commands.add(
    cmdClear,
    (e: Editor) => confirm(txtConfirm) && e.runCommand('core:canvas-clear')
  );
  Commands.add(
    cmdPublish,
    async (e: Editor) => {
      const componentData = JSON.stringify(e.getComponents());
      const html = e.getHtml();
      const css = e.getCss() ?? '';
      const js = e.getJs();
      
      const { builder } = await useCreateBuilder(componentData, html, css, js)
      navigateTo(`/build/${builder.builderPageId}`)
    }
  );
};
