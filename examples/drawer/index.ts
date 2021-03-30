import Rabbit from '../../src';

export default function drawerTest(): void {
    const drawer = new Rabbit.Drawer();

    let f1 = false;
    // @ts-ignore
    window.Op1 = () => {
        f1 === false ? (f1 = !f1) : f1;
        drawer.config('#test1').visable = f1;
    };
    drawer.config('#test1').events({
        onClose: () => {
            console.log('关闭抽屉');
        }
    });

    let top = false;
    // @ts-ignore
    window.handleTop = () => {
        top === false ? (top = !top) : top;
        drawer.config('#test2').visable = top;
    };

    let left = false;
    // @ts-ignore
    window.handleLeft = () => {
        left === false ? (left = !left) : left;
        drawer.config('#test3').visable = left;
    };

    let bottom = false;
    // @ts-ignore
    window.handleBottom = () => {
        bottom === false ? (bottom = !bottom) : bottom;
        drawer.config('#test4').visable = bottom;
    };

    let right = false;
    // @ts-ignore
    window.handleRight = () => {
        right === false ? (right = !right) : right;
        drawer.config('#test5').visable = right;
    };

    let inner = false;
    // @ts-ignore
    window.handleOpenInner = () => {
        inner === false ? (inner = !inner) : inner;
        drawer.config('#test6').visable = inner;
    };

    let first = false;
    // @ts-ignore
    window.multilayerDrawer = () => {
        first === false ? (first = !first) : first;
        drawer.config('#test7').visable = first;
    };

    let second = false;
    // @ts-ignore
    window.secondDrawer = () => {
        second === false ? (second = !second) : second;
        drawer.config('#test8').visable = second;
    };
}
