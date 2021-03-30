import Rabbit from '../../src';

export default function pageHeaderTest(): void {
    const pageHeader = new Rabbit.PageHeader();
    pageHeader.config('#a').events({
        onBack: () => {
            console.log('点击返回');
        }
    });
}
