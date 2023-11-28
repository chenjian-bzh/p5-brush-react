# p5-brush-react

对 [p5.brush](https://github.com/acamposuribe/p5.brush) 进行封装的 react 组件。 如果你只是想使用基础的 p5.js 的能力， 可以使用 [P5-wrapper](https://github.com/P5-wrapper/react/tree/master)

## 安装

使用 p5-brush-react 要求同时安装 [p5.js](https://github.com/processing/p5.js)

```jsx
yarn install p5-brush-react p5
```

## 示例

仓库中的实例代码 [examples](https://github.com/chenjian-bzh/p5-brush-react/examples)

也可以克隆仓库到本地，运行示例

```shell
git clone https://github.com/chenjian-bzh/p5-brush-react.git
cd p5-brush-react
yarn install
yarn preview
```

## 使用

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import P5BrushInstance from "p5-brush-react";

const App = () => {
  return (
    <div>
      <P5BrushInstance
        sketch={(ins) => {
          const palette = [
            "#2c695a",
            "#4ad6af",
            "#7facc6",
            "#4e93cc",
            "#f6684f",
            "#ffd300",
          ];

          ins.setup = () => {
            ins.background("black");
            ins.createCanvas(1500, 1500, "webgl");
            ins.angleMode("degrees");
            ins.brush.scaleBrushes(1.5);
            ins.brush.field("seabed");
          };

          ins.draw = () => {
            const { width, height } = ins;
            const random = ins.random.bind(ins);

            ins.frameRate(30);
            ins.translate(-width / 2, -height / 2);

            // brush.box() returns an array with available brushes
            const available_brushes = ins.brush.box();

            ins.brush.set(random(available_brushes), random(palette), 1);

            // Draw a random flowLine (x, y, length, direction)
            ins.brush.flowLine(
              random(width),
              random(height),
              random(300, 800),
              random(0, 360)
            );

            // Set the stroke to a random brush, color, and weight = 1
            ins.brush.set(random(available_brushes), random(palette), 1);

            // Draw a random flowLine (x, y, length, direction)
            ins.brush.flowLine(
              random(width),
              random(height),
              random(300, 800),
              random(0, 360)
            );
          };
        }}
      />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
```
