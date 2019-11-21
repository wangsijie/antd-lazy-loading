import { message } from 'antd';
import { MessageType } from 'antd/lib/message';

let hideIndicator: MessageType | null = null;
let request: number = 0;
let differTime: number = 300;
let defaultText: string = 'Loading';

export const pushRequest = (text?: string): void => {
  if (request === 0) {
    setTimeout(() => {
      if (request > 0 && !hideIndicator) {
        hideIndicator = message.loading(text || defaultText, 0);
      }
    }, differTime);
  }
  request += 1;
};

export const popRequest = (): void => {
  if (request === 1) {
    hideIndicator && hideIndicator();
    hideIndicator = null;
    request -= 1;
  } else if (request <= 0) {
    request = 0;
  } else {
    request -= 1;
  }
};

export const config = (_defaultText: string, _differTime: number = 300): void => {
  defaultText = _defaultText;
  differTime = _differTime;
};
