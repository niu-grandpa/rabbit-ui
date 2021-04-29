import Rabbit from '../../src';

export default function poptipTest(): void {
    const poptip = new Rabbit.Poptip();

    poptip.config('#test1').events({
        onPopperShow: () => {
            console.log('poptip show');
        },
        onPopperHide: () => {
            console.log('poptip hide');
        }
    });

    // @ts-ignore
    window.handleChange = (value: string) => {
        poptip.config('#testInput').content = value;
    };
    // @ts-ignore
    window.handleClose = () => {
        poptip.config('#test2').visible = false;
    };

    const table = `
        <div class="api">
            <table>
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>姓名</th>
                        <th>地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2021-01-17</td>
                        <td>山本先生</td>
                        <td>日本福冈县福冈市中央区樱坂</td>
                    </tr>
                    <tr>
                        <td>2021-01-17</td>
                        <td>山本先生</td>
                        <td>日本福冈县福冈市中央区樱坂</td>
                    </tr>
                    <tr>
                        <td>2021-01-17</td>
                        <td>山本先生</td>
                        <td>日本福冈县福冈市中央区樱坂</td>
                    </tr>
                </tbody>
            </table>
    </div>
    `;

    poptip.config('#test3').content = table;

    poptip.config('#test4').events({
        onOk: () => {
            Rabbit.Message.info('点击了确定');
        },
        onCancel: () => {
            Rabbit.Message.info('点击了取消');
        }
    });
}
