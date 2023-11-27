import p5 from "p5";
import { SketchType } from "../interface";
import { enahnceP5Instance } from "./enhanceP5Instance";

class EnhancedP5 extends p5 {
  constructor(sketch: SketchType, ele: HTMLDivElement) {
    super(sketch, ele);
    enahnceP5Instance(this);
  }
}

export function p5Wrapper(sketch: SketchType, ele: HTMLDivElement) {
  const instance = new p5(sketch, ele);
  enahnceP5Instance(instance);
  return instance;
}

export default EnhancedP5;
