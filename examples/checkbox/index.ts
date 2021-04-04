import Rabbit from '../../src';

export default function checkboxTest(): void {
    const checkbox = new Rabbit.Checkbox();

    const checkAll = checkbox.config('#checkAll');
    const checkAllGroup = checkbox.config('#checkAllGroup');

    checkAll.events({
        onChange: (checked: boolean) => {
            if (checkAll.indeterminate) {
                checkAllGroup.value = [];
                checkAll.checked = false;
                checkAll.indeterminate = false;
            } else if (checked) {
                checkAllGroup.value = ['苹果', '西瓜', '猕猴桃'];
            } else {
                checkAllGroup.value = [];
                checkAll.indeterminate = false;
            }
        }
    });

    checkAllGroup.events({
        onChange: (data: string[]) => {
            if (data.length === 0) {
                checkAll.checked = false;
                checkAll.indeterminate = false;
            } else if (data.length === 3) {
                checkAll.checked = true;
                checkAll.indeterminate = false;
            } else if (data.length && data.length < 3) {
                checkAll.indeterminate = true;
            }
        }
    });
}
