/* eslint-disable @typescript-eslint/no-non-null-assertion */
import PREFIX from '../prefix';

const ICONTYPE = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    confirm: 'ios-help-circle',
    loading: 'loading-solid'
};

let DEFAULT_ZINDEX = 1010;

interface ModalOptions {
    width?: string | number;
    title?: string;
    content?: string;
    okText?: '确定' | string;
    cancelText?: '取消' | string;
    loading?: boolean;
    scrollable?: boolean;
    closable?: boolean;
    lockScroll?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}

class $Modal {
    readonly VERSION: string;

    constructor() {
        this.VERSION = 'v1.0';
    }

    public info(config: ModalOptions) {}

    public success(config: ModalOptions) {}

    public warning(config: ModalOptions) {}

    public error(config: ModalOptions) {}

    public confirm(config: ModalOptions) {}

    public remove(): void {
        document.body.removeChild(document.querySelector(`.${PREFIX.modal}-$modal`)!);
    }

    private _create(type: string, config: ModalOptions): void {
        DEFAULT_ZINDEX++;

        const { width, title, content, okText, cancelText } = config;

        // @ts-ignore
        const icon = ICONTYPE[type];

        const isShowCancelBtn =
            type === 'confirm'
                ? `<button type="button" class="${PREFIX.button} ${PREFIX.button}-text">
                     ${cancelText}
                   </button>`
                : '';

        const template = `
        <div class="${PREFIX.modal}-$modal">
          <div class="${PREFIX.modal}-mask" style="z-index: ${DEFAULT_ZINDEX};"></div>
          <div class="${PREFIX.modal}-wrap" style="z-index: ${DEFAULT_ZINDEX};">
              <div class="${PREFIX.modal}" style="width: ${width}px;">
                  <div class="${PREFIX.modal}-content">
                      <div class="${PREFIX.modal}-body">
                          <div class="${PREFIX.modal}-confirm">
                              <div class="${PREFIX.modal}-confirm-head">
                                  <div class="${PREFIX.modal}-confirm-head-icon ${PREFIX.modal}-confirm-head-icon-info">
                                      <i class="${PREFIX.icon} ${PREFIX.icon}-${icon}"></i>
                                  </div>
                                  <div class="${PREFIX.modal}-confirm-head-title">${title}</div>
                              </div>
                              <div class="${PREFIX.modal}-confirm-body">${content}</div>
                              <div class="${PREFIX.modal}-confirm-footer">
                                  ${isShowCancelBtn}
                                  <button type="button" class="${PREFIX.button} ${PREFIX.button}-primary">${okText}</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>`;

        document.body.insertAdjacentHTML('afterend', template);
    }
}

export default $Modal;
