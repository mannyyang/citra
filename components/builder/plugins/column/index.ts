import { type Editor, type Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
// import { exportedSVG } from '../icons';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  const flexGrid = true;
  const clsRow = BuilderComponent.ROW.class;
  const clsCol = BuilderComponent.COL.class;
  const minHeight = '50px';

  const privateCls = [`.${clsRow}`, `.${clsCol}`];
  editor.on(
    'selector:add',
    (selector) =>
      privateCls.indexOf(selector.getFullName()) >= 0 &&
      selector.set('private', 1)
  );

  Components.addType(BuilderComponent.COL.id, {
    isComponent: (el: HTMLElement) => isComponent(el, BuilderComponent.COL.id),
    model: {
      defaults: {
        name: BuilderComponent.COL.name,
        classes: [BuilderComponent.COL.class],
        style: {
          'min-height': minHeight,
          'flex-basis': '100%'
        },
        draggable: `.${clsRow}`,
        // resizable: true,
        attributes: {
          'data-ca': BuilderComponent.COL.id
        }
      }
    }
  });

  Components.addType(BuilderComponent.ROW.id, {
    isComponent: (el: HTMLElement) => {
      return isComponent(el, BuilderComponent.ROW.id);
    },
    model: {
      defaults: {
        name: BuilderComponent.ROW.name,
        classes: [BuilderComponent.ROW.class],
        traits: [
          {
            type: 'select',
            name: 'type',
            label: 'Columns',
            options: [
              { id: 'one', label: '1 Column' },
              { id: 'two', label: '2 Columns' },
              { id: 'three', label: '3 Columns' },
              { id: 'one_two', label: '1-2 Columns' },
              { id: 'two_one', label: '2-1 Columns' }
            ]
          }
        ],
        style: {
          display: 'flex',
          padding: '10px'
        },
        droppable: `.${clsCol}`,
        attributes: {
          'data-ca': BuilderComponent.ROW.id,
          type: 'one'
        }
      },

      init() {
        this.on('change:attributes:type', this.handleColumnChange);
      },

      handleColumnChange() {
        const childComponents = editor.getSelected()?.components();

        if (childComponents) {
          let counts = 1;

          for (let i = 0; i < childComponents.length; i++) {
            if (childComponents.at(i).components().length > 0) {
              continue;
            } else {
              childComponents.at(i).remove();
              i -= 1;
            }
          }

          switch (this.getAttributes().type) {
            case 'one':
              counts = 1;
              break;
            case 'two':
            case 'one_two':
            case 'two_one':
              counts = 2;
              break;
            case 'three':
              counts = 3;
              break;
          }

          const baseId = childComponents.length;
          counts -= baseId;

          for (let i = 0; i < counts; i++) {
            childComponents.add({
              type: BuilderComponent.COL.id
            });

            if (counts === 2) {
              if (
                ('one_two' === this.getAttributes().type && i === 0) ||
                ('two_one' === this.getAttributes().type && i === 1)
              ) {
                childComponents
                  .at(baseId + i)
                  .setStyle(
                    flexGrid
                      ? { 'flex-basis': '33%', 'min-height': minHeight }
                      : { width: '33%' }
                  );
              }

              if (
                ('one_two' === this.getAttributes().type && i === 1) ||
                ('two_one' === this.getAttributes().type && i === 0)
              ) {
                childComponents
                  .at(baseId + i)
                  .setStyle(
                    flexGrid
                      ? { 'flex-basis': '67%', 'min-height': minHeight }
                      : { width: '67%' }
                  );
              }
            }
          }
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.COLUMN.id, {
    category: BuilderCategory.BASIC.name,
    label: 'Column',
    media: exportedSVG['column'],
    content: {
      type: BuilderComponent.ROW.id,
      components: [
        {
          type: BuilderComponent.COL.id
        }
      ]
    },
    select: true
  });
};

export default plugin;
