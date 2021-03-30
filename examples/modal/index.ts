import Rabbit from '../../src';

export default function modalTest(): void {
    const modal = new Rabbit.Modal();

    let timer: any;
    // @ts-ignore
    window.handleModal1 = () => {
        modal.config('#m1').visable = true;
        modal.config('#m1').events({
            onOk: () => {
                Rabbit.Message.info('点击了确定');
            },
            onCancel: () => {
                Rabbit.Message.info('点击了取消');
            }
        });
    };
    // @ts-ignore
    window.handleModal2 = () => {
        modal.config('#m2').visable = true;
    };
    // @ts-ignore
    window.handleModal3 = () => {
        modal.config('#m3').visable = true;
    };
    // @ts-ignore
    window.handleModal4 = () => {
        modal.config('#m4').visable = true;
    };
    // @ts-ignore
    window.handleModal5 = () => {
        modal.config('#m5').visable = true;
        modal.config('#m5').events({
            onOk: () => {
                timer = setTimeout(() => {
                    modal.config('#m5').visable = false;
                }, 2000);
            },
            onCancel: () => {
                clearTimeout(timer);
            }
        });
    };
    // @ts-ignore
    window.handleModal6 = () => {
        modal.config('#m6').visable = true;
    };
    // @ts-ignore
    window.handleModal7 = () => {
        modal.config('#m7').visable = true;
    };
    // @ts-ignore
    window.handleModal8 = () => {
        modal.config('#m8').visable = true;
    };
    // @ts-ignore
    window.handleModal9 = () => {
        modal.config('#m9').visable = true;
    };
    // @ts-ignore
    window.handleModal10 = () => {
        modal.config('#m10').visable = true;
    };
}
