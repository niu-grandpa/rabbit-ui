import Rabbit from '../../src';

export default function circleTest(): void {
    const circle = new Rabbit.Circle();

    const test = circle.config('#test');
    const percentText = document.querySelector('#percentText')!;

    let percent = 0;

    // @ts-ignore
    window.add = () => {
        if (percent >= 100) {
            return false;
        }

        percent += 10;
        percent == 100 ? (test.strokeColor = '#5cb85c') : '';
        test.percent = percent;
        percentText.textContent = `${percent}%`;
    };
    // @ts-ignore
    window.minus = () => {
        if (percent <= 0) {
            return false;
        }

        percent -= 10;
        test.percent = percent;
        test.strokeColor = '#1890ff';
        percentText.textContent = `${percent}%`;
    };
}
