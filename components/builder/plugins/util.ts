import type { ComponentDefinitionDefined } from 'grapesjs';

export const isComponent = (el: HTMLElement, type: string): ComponentDefinitionDefined | boolean | undefined => {
    if (el && el.attributes) {
        const _attr = el.attributes.getNamedItem('data-ca');
        if (_attr) {
            return _attr.value.toLocaleLowerCase() === type.toLowerCase();
        }
    }
}