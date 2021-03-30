import Rabbit from '../../src';

export default function alertTest(): void {
    const Alert = new Rabbit.Alert();
    Alert.config('#test').events({
        onClose: (event) => {
            console.log(event);
        }
    });
}
