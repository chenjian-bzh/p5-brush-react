import type p5 from "p5";
import p5_class from "p5";

export type P5InstanceType = p5;

export type EnhancedP5ConstructorProps = ConstructorParameters<typeof p5_class>;

export type EnhancedP5InstnaceType = P5InstanceType & {
  flowLine: (x: number, y: number, length: number, dir: number) => void;
  scaleBrushes: (_scale: number) => void;
  field: (a: string) => void;
};

export type SketchType = (p5: EnhancedP5InstnaceType) => void;
