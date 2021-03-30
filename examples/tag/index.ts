import Rabbit from '../../src';

export default function tagTest(): void {
    const tag = new Rabbit.Tag();
    tag.config('#demoTag').events({
        onChange(checked) {
            console.log(checked);
        }
    });
}
