# p5-brush-react

React component that encapsulates [p5.brush](https://github.com/acampouribe/p5.brush), allows you to use p5.js and p5.brush in React app

## Install

When using p5-brush-react, you also need to install [p5.js](https://github.com/processing/p5.js)

```jsx
yarn install p5-brush-react p5
```

## Example

Example code in the warehouse [examples](https://github.com/chenjian-bzh/p5-brush-react/src/examples)

You can also clone the repository locally and run the example

```shell
git clone https://github.com/chenjian-bzh/p5-brush-react.git
cd p5-brush-react
yarn install
yarn preview
```

## use

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
