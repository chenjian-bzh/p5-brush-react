import P5WithBrush from "../P5WithBrush";
import { SketchType } from "../interface";

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
  };

  return <P5WithBrush sketch={sketch} />;
};

export default App;
