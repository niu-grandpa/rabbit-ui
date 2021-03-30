import Rabbit from '../../src';
import Message from '../../src/components/message';

export default function stepsTest(): void {
    const steps = new Rabbit.Steps();

    let n = 0;
    //@ts-ignore
    window.next = () => {
        n++;
        if (n > 3) {
            n = 3;
            Message.success('处理完成');
            steps.config('#a').setSteps({ current: n, status: 'finish' });
            return;
        }
        steps.config('#a').setSteps({ current: n });
    };
}
