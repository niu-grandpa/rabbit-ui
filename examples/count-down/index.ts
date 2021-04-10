import Rabbit from '../../src';

export default function countDownTest(): void {
    const countDown = new Rabbit.CountDown();

    const date = new Date();

    const YYMMDD = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const h = date.getHours();
    const mm = date.getMinutes();

    // 'YY/MM/DD hh:mm:ss'
    countDown.config('#test1').endTime = `${YYMMDD} ${h + 1}:00:00`;

    countDown.config('#test2').endTime = `${YYMMDD} ${h}:${mm + 1}:00`;

    countDown.config('#test2').events({
        onStop: (stop) => {
            if (stop) alert('倒计时结束!');
        }
    });
}
