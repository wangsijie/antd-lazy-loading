import { message } from "antd";

let hideIndicator = null;
let request = 0;
let differTime = 300;
let defaultText = "Loading";

export const pushRequest = text => {
  if (request === 0) {
    setTimeout(() => {
      if (request > 0 && !hideIndicator) {
        hideIndicator = message.loading(text || defaultText, 0);
      }
    }, differTime);
  }
  request += 1;
};

export const popRequest = () => {
  if (request === 1) {
    hideIndicator && hideIndicator();
    hideIndicator = null;
  } else if (request <= 0) {
    return (request = 0);
  }
  request -= 1;
};

export const config = (_defaultText, _differTime = 300) => {
  defaultText = _defaultText;
  differTime = _differTime;
};
