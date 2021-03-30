import Rabbit from '../../src';

export default function tooltipTest(): void {
    const tooltip = new Rabbit.Tooltip();

    tooltip.config('#test').events({
        onShow: () => {
            console.log('show');
        },
        onHide: () => {
            console.log('hide');
        }
    });

    tooltip.config('#test2').content =
        '<div><p>显示多行信息</p> <p><i>可以自定义样式</i></p></div>';
}
