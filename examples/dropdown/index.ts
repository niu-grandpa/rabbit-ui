import Rabbit from '../../src';

export default function dropdownTest(): void {
    const dropdown = new Rabbit.Dropdown();

    dropdown.config('#test').events({
        onVisibleChange: (visible) => {
            console.log(visible);
        }
    });
}
