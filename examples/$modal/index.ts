import Rabbit from '../../src';

export default function $modalTest(): void {
    const title = '对话框标题';
    const content = '这是一段对话框的内容';

    // @ts-ignore
    window.instance = (type: string) => {
        switch (type) {
            case 'info':
                Rabbit.$Modal.info({
                    title,
                    content
                });
                break;
            case 'success':
                Rabbit.$Modal.success({
                    title,
                    content
                });
                break;
            case 'warning':
                Rabbit.$Modal.warning({
                    title,
                    content
                });
                break;
            case 'error':
                Rabbit.$Modal.error({
                    title,
                    content
                });
                break;
        }
    };

    // @ts-ignore
    window.confirm = () => {
        Rabbit.$Modal.confirm({
            title: '确认对话框标题',
            content: '<p>这是一段自定义的内容...</p><p>这是一段自定义的内容...</p>',
            dangerouslyUseHTMLString: true,
            onOk: () => {
                Rabbit.Message.info('点击了确定');
            },
            onCancel: () => {
                Rabbit.Message.info('点击了取消');
            }
        });
    };

    // @ts-ignore
    window.custom = () => {
        Rabbit.$Modal.confirm({
            title: '确认对话框标题',
            content: '<p>这是一段自定义的内容...</p><p>这是一段自定义的内容...</p>',
            okText: 'OK',
            cancelText: 'Cancel',
            dangerouslyUseHTMLString: true
        });
    };

    // @ts-ignore
    window.async = () => {
        Rabbit.$Modal.confirm({
            title: '确认对话框标题',
            content: '<p>对话框将在 2秒 后关闭</p>',
            loading: true,
            dangerouslyUseHTMLString: true,
            onOk: () => {
                setTimeout(() => {
                    Rabbit.$Modal.remove();
                    Rabbit.Message.info('异步关闭了对话框');
                }, 2000);
            }
        });
    };
}
