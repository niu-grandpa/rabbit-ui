import Rabbit from '../../src';

export default function dropdownTest(): void {
    const dropdown = new Rabbit.Dropdown();

    dropdown.config('#test').events({
        onClick: (key) => {
            console.log(key);
        },
        onVisibleChange: (visible) => {
            console.log(visible);
        }
    });

    // @ts-ignore
    window.handleOpen = () => (dropdown.config('#testCustom').visible = true);
    // @ts-ignore
    window.handleClose = () => (dropdown.config('#testCustom').visible = false);
}
