export const CLASS_PREFIX = 'ntvc';

// Need to prefix with 'n-' to avoid conflict with existing built-in types
export const BuilderComponent = {
  DIV: {
    id: 'n-div',
    name: 'Div',
    class: `${CLASS_PREFIX}-div`
  },
  ROW: {
    id: 'n-row',
    name: 'Row',
    class: `${CLASS_PREFIX}-row`
  },
  COL: {
    id: 'n-col',
    name: 'Column',
    class: `${CLASS_PREFIX}-col`
  },
  CELL: {
    id: 'n-col',
    name: 'Column',
    class: `${CLASS_PREFIX}-cell`
  },
  TEXT: {
    id: 'n-text',
    name: 'Text',
    class: `${CLASS_PREFIX}-text`
  },
  BUTTON: {
    id: 'n-button',
    name: 'Button',
    class: `${CLASS_PREFIX}-button`
  },
  LIST: {
    id: 'n-list',
    name: 'List',
    class: `${CLASS_PREFIX}-list`
  },
  LIST_ITEM: {
    id: 'n-list-item',
    name: 'List Item',
    class: `${CLASS_PREFIX}-list-item`
  }
};

export const BuilderBlock = {
  DIV: {
    id: 'div',
    name: 'Div'
  },
  COLUMN: {
    id: 'column',
    name: 'Column'
  },
  TEXT: {
    id: 'text',
    name: 'Text'
  },
  BUTTON: {
    id: 'button',
    name: 'Button'
  },
  LIST: {
    id: 'list',
    name: 'List'
  },
  LIST_ITEM: {
    id: 'listItem',
    name: 'List Item'
  }
};
