import Rabbit from '../../src';

export default function stepsTest(): void {
    const steps = new Rabbit.Steps();

    const targetStep = steps.config('#test');
    const showStep = document.querySelector('#step')!;

    let count = 0;
    showStep.textContent = `${count + 1}`;

    // @ts-ignore
    window.handlClickNext = () => {
        if (count == 3) {
            count = 0;
        } else {
            count += 1;
        }

        targetStep.current = count;

        showStep.textContent = `${count + 1}`;
    };
}
