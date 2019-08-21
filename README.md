# antd-lazy-loading

Global loading indicator for antd, differd to show.

## Installation

```sh
npm i antd-lazy-loading
```

## Usage

[![Edit antd-lazy-loading](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/angry-northcutt-xuh5o?fontsize=14)

```js
import React from "react";
import ReactDOM from "react-dom";
import * as lazyLoading from "antd-lazy-loading";
import { Button } from "antd";
import "antd/dist/antd.css";

import "./styles.css";

function App() {
  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <div>
        <Button onClick={() => lazyLoading.pushRequest()}>Push Request</Button>
      </div>
      <div>
        <Button onClick={() => lazyLoading.popRequest()}>Pop Request</Button>
      </div>
      <div>
        <Button onClick={() => lazyLoading.pushRequest("Please wait")}>
          Push Request with custom text
        </Button>
      </div>
      <div>
        <Button onClick={() => lazyLoading.config("Custom loading", 0)}>
          Change global text and differ time
        </Button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
