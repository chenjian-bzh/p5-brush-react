import _ from "spectral.js";
import _2 from "./p5.brush";
import p5 from "p5";
import React from "react";
import { useEffect, useRef } from "react";

const App = () => {
  const domRef = useRef(null);

  useEffect(() => {
    // We define our palette
    const palette = [
      "#2c695a",
      "#4ad6af",
      "#7facc6",
      "#4e93cc",
      "#f6684f",
      "#ffd300",
    ];

    new p5((ins: P5Instance) => {
      ins.setup = () => {
        ins.background("#fffceb");
        ins.createCanvas(1500, 1500, "webgl");
        ins.angleMode("degrees");
        ins.ins // // Scale brushes to adapt to canvas size
          .scaleBrushes(1.5);

        // // Activate the flowfield we're going to use
        // brush.field("seabed");
      };

      ins.draw = () => {
        ins.frameRate(20);
        ins.rect(20, 20, 30, 60);

        ins.translate(-width / 2, -height / 2);

        // brush.box() returns an array with available brushes
        const available_brushes = brush.box();

        // Set the stroke to a random brush, color, and weight = 1
        // You set a brush like this: brush.set(name_brush, color, weight)
        brush.set(random(available_brushes), random(palette), 1);

        // Draw a random flowLine (x, y, length, direction)
        brush.flowLine(
          random(width),
          random(height),
          random(300, 800),
          random(0, 360)
        );
      };
    }, domRef.current!);
  }, []);

  return <div ref={domRef}>hello</div>;
};

export default App;
