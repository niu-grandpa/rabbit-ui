import Rabbit from '../../src';

export default function checkboxTest(): void {
    const checkbox = new Rabbit.Checkbox();

    const checkAll = checkbox.config('#checkAll');
    const checkAllGroup = checkbox.config('#checkAllGroup');

    checkAll.events({
        onChange: (checked: boolean) => {
            if (checkAll.indeterminate) {
                checkAll.checked = false;
            } else {
                checkAll.checked = true;
            }
            checkAll.indeterminate = false;

            if (checked) {
                checkAllGroup.value = ['香蕉', '苹果', '西瓜'];
            } else {
                checkAllGroup.value = [];
            }
        }
    });

    checkAllGroup.events({
        onChange: (data: string[]) => {
            if (data.length === 3) {
                checkAll.indeterminate = false;
                checkAll.checked = true;
            } else if (data.length > 0) {
                checkAll.indeterminate = true;
                checkAll.checked = false;
            } else {
                checkAll.indeterminate = false;
                checkAll.checked = false;
            }
        }
    });
}
