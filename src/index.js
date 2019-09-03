import { message } from 'antd';

let hideIndicator = null;
let request = 0;
let differTime = 300;
let defaultText = 'Loading';

export const pushRequest = (text) => {
    if (request++ === 0) {
        hideIndicator = null;
        setTimeout(() => {
            if (request > 0) {
                hideIndicator = message.loading(text || defaultText, 0);
            }
        }, differTime);
    }
};

export const popRequest = () => {
    request--;
    hideIndicator && hideIndicator();
};

export const config = (_defaultText, _differTime = 300) => {
    defaultText = _defaultText;
    differTime = _differTime;
};
