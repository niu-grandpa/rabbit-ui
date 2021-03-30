import Rabbit from '../../src';

export default function tabsTest(): void {
    const tabs = new Rabbit.Tabs();
    tabs.config('#a').events({
        onClick: (key) => {
            console.log(key);
        }
    });
    // setTimeout(() => {
    //     tabs.config('#a').activeKey = '2';
    // }, 1500);
}
