import Rabbit from '../../src';

export default function poptipTest(): void {
    const poptip = new Rabbit.Poptip();

    // @ts-ignore
    window.handleChange = (val: string) => {
        poptip.config('#test-input').content = val;
    };

    const complexContent = `
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

    poptip.config('#test1').content = complexContent;

    poptip.config('#test2').events({
        onOk: () => {
            Rabbit.Message.info('点击了确定');
        },
        onCancel: () => {
            Rabbit.Message.info('点击了取消');
        }
    });
}
