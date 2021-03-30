/* eslint-disable @typescript-eslint/ban-ts-comment */
import Rabbit from '../../src';

export default function loadingBarTest(): void {
    // Rabbit.Loading.config({
    //   height: 5,
    //   color: '#5cb85c',
    //   failedColor: '#f0ad4e',
    //   duration: 1000,
    // });

    // @ts-ignore
    window.Start = () => {
        Rabbit.Loading.statr();
    };
    // @ts-ignore
    window.Finish = () => {
        Rabbit.Loading.finish();
    };
    // @ts-ignore
    window._Error = () => {
        Rabbit.Loading.error();
    };
}
