import p5 from "p5";
import { SketchType } from "../interface";
import { enahnceP5Instance } from "./enhanceP5Instance";

class EnhancedP5 extends p5 {
  constructor(sketch: SketchType, ele: HTMLDivElement) {
    super(sketch, ele);
    enahnceP5Instance(this);
  }
}

export default EnhancedP5;
