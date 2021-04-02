import { $el } from '../../dom-utils';
import PREFIX from '../prefix';

class Checkbox {
    readonly VERSION: string;
    readonly COMPONENTS: NodeListOf<Element>;

    constructor() {
        this.VERSION = 'v1.0';
        this.COMPONENTS = $el('r-checkbox', { all: true });
        this._create(this.COMPONENTS);
    }

    private _create(COMPONENTS: NodeListOf<Element>) {
        COMPONENTS.forEach((node) => {
            //
        });
    }
}

export default Checkbox;
