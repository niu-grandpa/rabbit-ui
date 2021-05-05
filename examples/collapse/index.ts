import Rabbit from '../../src';

export default function collapseTest(): void {
    const collapse = new Rabbit.Collapse();
    collapse.config('#demoCollapse').events({
        onChange: (index) => {
            console.log(index);
        }
    });
}
