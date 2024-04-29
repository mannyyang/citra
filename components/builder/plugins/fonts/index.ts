import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import commands from './commands';
import { fontsDialogPlugin } from './fonts';
import en from './locale/en';
import fr from './locale/fr';

const plugin: Plugin = (editor: Editor, opts: any) => {
    const pn = editor.Panels;

    const options = { ...{
        // default options
        i18n: {},
        preserveDefaultFonts: true,
    }, ...opts}

  
    // Load i18n files
    editor.I18n && editor.I18n.addMessages({
        en,
        fr,
        ...options.i18n,
    })

    commands(editor)
    fontsDialogPlugin(editor, options);

    pn.getButton('options', 'sw-visibility')?.set('active', 1);
    pn.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "create-button",
          label: exportedSVG['fontsDialogButton'],
          command(editor:Editor) {
            editor.runCommand("open-fonts");
          }
        }
      ]
    });
    
}

// Expose commands to the app
export * from './commands';
export * from './fonts';
export default plugin;
