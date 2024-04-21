// @ts-nocheck
import type { Plugin } from 'grapesjs';

const plugin: Plugin = (editor) => {
  // COPY PASTE COMPONENTS/STYLE BETWEEN PAGES
  const getStyles = (components) => {
    // recurse down through components and store styles in temp attribute
    components.forEach((component) => {
      const recurse = (comp) => {
        // if component has any styling
        if (Object.keys(comp.getStyle()).length !== 0)
          comp.attributes.savedStyle = comp.getStyle();
        if (comp.get('components').length) {
          comp.get('components').forEach((child) => {
            recurse(child);
          });
        }
      };
      recurse(component);
    });
    return components;
  };

  const setStyles = (component) => {
    // recurse down and re-apply style back to components
    const recurse = (comp) => {
      if ('savedStyle' in comp.attributes) {
        comp.setStyle(comp.attributes.savedStyle);
        delete comp.attributes.savedStyle;
      }
      if (comp.attributes.components.length) {
        comp.attributes.components.forEach((child) => {
          recurse(child);
        });
      }
    };
    recurse(component);
  };

  const newCopy = (selected) => {
    window.localStorage.setItem(
      'zcc-grapesjs-clipboard',
      JSON.stringify(selected)
    );
  };

  const newPaste = (selected) => {
    let components = JSON.parse(
      window.localStorage.getItem('zcc-grapesjs-clipboard')
    );
    if (components) {
      if (selected && selected.attributes.type !== 'wrapper') {
        const index = selected.index();
        // Invert the order so last item gets added first and gets pushed down as others get added.
        components.reverse();
        const currentSelection = selected.collection;
        components.forEach((comp) => {
          if (currentSelection) {
            const added = currentSelection.add(comp, { at: index + 1 });
            editor.trigger('component:paste', added);
            setStyles(added);
          }
        });
        selected.emitUpdate();
      } else {
        components = editor.addComponents(components);
        components.forEach((comp) => {
          setStyles(comp);
        });
      }
    }
  };

  const commands = editor.Commands;

  commands.add('core:copy', (ed) => {
    const selected = getStyles([...ed.getSelectedAll()]);
    const filteredSelected = selected.filter(
      (item) => item.attributes.copyable == true
    );
    if (filteredSelected.length) {
      newCopy(filteredSelected);
    }
  });

  commands.add('core:paste', (ed) => {
    const selected = ed.getSelected();
    newPaste(selected);
  });
};

export default plugin;
