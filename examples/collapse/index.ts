import Rabbit from '../../src';

export default function collapseTest(): void {
    const collapse = new Rabbit.Collapse();
    collapse.config('#demoCollapse').events({
        onChange: (key) => {
            console.log(key);
        }
    });
}
