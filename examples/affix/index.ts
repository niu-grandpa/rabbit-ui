import Rabbit from '../../src';

export default function affixTest(): void {
    const affix = new Rabbit.Affix();

    affix.config('#test').events({
        onChange: (affixed) => {
            Rabbit.Message.info(`当前状态：${affixed}`);
        }
    });
}
