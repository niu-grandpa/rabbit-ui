// @ts-nocheck
import Rabbit from '../../src';

export default function messaest(): void {
    // 全局配置
    // Rabbit.Message.config({
    //     duration: 8,
    //     top: 254
    // });
    window.info = () => {
        Rabbit.Message.info('这是一条普通的提示');
    };

    window.success = () => {
        Rabbit.Message.success('这是一条成功的提示');
    };
    window.warning = () => {
        Rabbit.Message.warning('这是一条警告的提示');
    };
    window.error = () => {
        Rabbit.Message.error('这是一条错误的提示');
    };

    window.background = (type: string) => {
        Rabbit.Message[type]({
            content: '这是一条带背景色的通知',
            background: true,
            duration: 5
        });
    };

    window.loading = () => {
        Rabbit.Message.loading({
            content: '正在加载中...',
            duration: 0,
            key: 'msgkey'
        });
        setTimeout(() => Rabbit.Message.destroy('msgkey'), 5000);
    };
    window.promise = () => {
        Rabbit.Message.loading('正在加载中...').then(() => {
            Rabbit.Message.success('加载成功!').then(() => {
                Rabbit.Message.info('加载成功后的提示');
            });
        });
    };
    window.time = () => {
        Rabbit.Message.success({
            content: '这是成功的提示信息，我将在10秒内消失',
            duration: 10
        });
    };
    window.closable = () => {
        Rabbit.Message.info({
            content: '可手动关闭的提示',
            duration: 8,
            closable: true
        });
    };
    window.useHTML = () => {
        Rabbit.Message.info({
            content: '<strong>这是 <i>HTML</i> 片段</strong>',
            dangerouslyUseHTMLString: true
        });
    };
}
