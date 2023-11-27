import P5BrushInstance from "./components/P5Instance";
import { SketchType } from "./interface";

const App = () => {
  const sketch: SketchType = (ins) => {
    const palette = [
      "#2c695a",
      "#4ad6af",
      "#7facc6",
      "#4e93cc",
      "#f6684f",
      "#ffd300",
    ];

    ins.setup = () => {
      ins.background("#fffceb");
      ins.createCanvas(1500, 1500, "webgl");
      ins.angleMode("degrees");
      ins.scaleBrushes(1.5);
      ins.field("seabed");
    };

    ins.draw = () => {
      ins.frameRate(20);
      ins.rect(20, 20, 30, 60);

      // ins.translate(-width / 2, -height / 2);

      // brush.box() returns an array with available brushes
      const available_brushes = ins.box();

      // Set the stroke to a random brush, color, and weight = 1
      // You set a brush like this: brush.set(name_brush, color, weight)
      // ins.set(ins.random(available_brushes), ins.random(palette), 1);

      // Draw a random flowLine (x, y, length, direction)
      ins.flowLine(
        ins.random(1500),
        ins.random(1500),
        ins.random(300, 800),
        ins.random(0, 360)
      );
    };
  };

  return <P5BrushInstance sketch={sketch} />;
};

export default App;
