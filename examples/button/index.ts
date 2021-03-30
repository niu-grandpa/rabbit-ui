// @ts-nocheck
import Rabbit from '../../src';

export default function buttonTest(): void {
    const btn = new Rabbit.Button();
    window.handleLoad = () => {
        btn.config('#clickMe').loading = true;
        setTimeout(() => {
            btn.config('#clickMe').loading = false;
        }, 3000);
    };
}
