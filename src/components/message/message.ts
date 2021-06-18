/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { usePromiseCallback } from '../../mixins';
import { destroyElem, destroyElemByKey, type } from '../../utils';
import { CreateInstance, KeyType, MessageConfig, PREFIX_KEY, LeaveClass } from './instance';

interface GlobalConfigs {
    top?: number;
    duration?: number;
}

const DEFAULTS = {
    top: 24,
    duration: 3
};

class Message extends CreateInstance {
    readonly VERSION: string;
    constructor() {
        super();
        this.VERSION = '2.0';
        setTimeout(() => this._init(DEFAULTS.top), 0);
    }
    public info(config: string | MessageConfig): Promise<void> {
        this._create('info', config, DEFAULTS.duration);
        return usePromiseCallback(DEFAULTS.duration, config);
    }
    public success(config: string | MessageConfig): Promise<void> {
        this._create('success', config, DEFAULTS.duration);
        return usePromiseCallback(DEFAULTS.duration, config);
    }
    public warning(config: string | MessageConfig): Promise<void> {
        this._create('warning', config, DEFAULTS.duration);
        return usePromiseCallback(DEFAULTS.duration, config);
    }
    public error(config: string | MessageConfig): Promise<void> {
        this._create('error', config, DEFAULTS.duration);
        return usePromiseCallback(DEFAULTS.duration, config);
    }
    public loading(config: string | MessageConfig): Promise<void> {
        this._create('loading', config, DEFAULTS.duration);
        return usePromiseCallback(DEFAULTS.duration, config);
    }
    public config(options: GlobalConfigs): void {
        if (options.top && type.isNum(options.top)) {
            DEFAULTS.top = options.top;
        }
        if ((options.duration && type.isNum(options.duration)) || options.duration === 0) {
            DEFAULTS.duration = options.duration;
        }
    }
    public destroy(key?: KeyType): void {
        if (key && (type.isStr(key) || type.isNum(key))) {
            destroyElemByKey({
                key,
                duration: 0.1,
                prefixKey: PREFIX_KEY,
                clsLeave: LeaveClass
            });
        } else {
            this.INSTANCES.forEach((instance) => {
                destroyElem(instance, {
                    duration: 0.1,
                    clsLeave: LeaveClass
                });
            });
            this.INSTANCES.length = 0;
        }
    }
}
export default Message;
