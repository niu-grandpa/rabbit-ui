import { $el } from '../../dom-utils';

class Select {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-select', { all: true });
        this._create(this.COMPONENTS);
    }
    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            const {} = this._attrs(node);
        });
    }
    private _attrs(node: Element) {
        return {
            //
        };
    }
}
export default Select;
