import p5 from "p5";
import { SketchType } from "../interface";
import { migrateBrush } from "./migrateBrush";

export function createInstance(sketch: SketchType, ele: HTMLDivElement) {
  const instance = new p5(sketch, ele);
  return migrateBrush(instance);
}
