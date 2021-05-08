import Rabbit from '../../src';

export default function inputNumberTest(): void {
    const inputNumber = new Rabbit.InputNumber();

    inputNumber.config('#test1').events({
        onChange: (value) => {
            console.log('changed!', value);
        }
    });

    let flag = true;
    // @ts-ignore
    window.handleClick = () => {
        flag ? (flag = !flag) : (flag = true);
        inputNumber.config('#test2').disabled = flag;
    };
}
