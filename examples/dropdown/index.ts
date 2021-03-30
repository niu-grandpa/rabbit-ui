import Rabbit from '../../src';

export default function dropdownTest(): void {
    const dropdown = new Rabbit.Dropdown();
    dropdown.config('#d').events({
        onClick: (index) => {
            console.log(`当前索引项：${index}`);
        }
    });
}
