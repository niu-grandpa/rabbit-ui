import { $el } from '../../dom-utils';

class InputNumber {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<HTMLElement>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-input-number', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<HTMLElement>) {
        COMPONENTS.forEach((node) => {
            //
        });
    }
}

export default InputNumber;
