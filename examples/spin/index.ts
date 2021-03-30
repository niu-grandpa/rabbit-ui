import Rabbit from '../../src';

export default function spinTest(): void {
    const spin = new Rabbit.Spin();
    const Switch = new Rabbit.Switch();

    Switch.config('r-switch').events({
        onChange: (checked) => {
            // @ts-ignore
            document.querySelector('#abcd').style.display = checked ? 'none' : '';
        }
    });

    // @ts-ignore
    window.handle1 = () => {
        spin.show();
        setTimeout(() => {
            spin.hide();
        }, 3000);
    };
    // @ts-ignore
    window.handle2 = () => {
        spin.show({
            content: `<i class="rab-icon rab-icon-loading1 rab-load-loop" style="font-size: 22px;height: 30px"></i>
            <div>Loading...</div>`
        });
        setTimeout(() => {
            spin.hide();
        }, 3000);
    };
}
