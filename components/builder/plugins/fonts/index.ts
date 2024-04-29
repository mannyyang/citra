import type { Editor, Plugin } from 'grapesjs';
import commands from './commands';
import { fontsDialogPlugin } from './fonts';
import en from './locale/en';
import fr from './locale/fr';

const plugin: Plugin = (editor: Editor, opts: any) => {
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
}

// Expose commands to the app
export * from './commands';
export * from './fonts';
export default plugin;
