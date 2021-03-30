import Rabbit from '../../src';

export default function switchTest(): void {
    const Switch = new Rabbit.Switch();

    Switch.config('#test').events({
        onChange: (checked) => {
            Rabbit.Message.info(`开关状态: ${checked}`);
        }
    });

    let flag = true;
    // @ts-ignore
    window.handlClick = () => {
        flag ? (flag = !flag) : (flag = !flag);
        Switch.config('#testDis').disabled = flag;
    };
}
