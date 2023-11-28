import type p5 from "p5";
import p5_class from "p5";
import { ReactNode } from "react";

export type P5Instance = p5;

export type P5WithBrushConstructorProps = ConstructorParameters<
  typeof p5_class
>;

export type P5WithBrushInstnace = P5Instance & {
  brush: {
    flowLine: (x: number, y: number, length: number, dir: number) => void;
    scaleBrushes: (_scale: number) => void;
    field: (a: string) => void;
    box: () => unknown[];
    set: (brushName: string, color: string | p5.Color, weight: number) => void;
  };
};

export type SketchType = (p5: P5WithBrushInstnace) => void;

export type P5BrushInstanceProps = {
  sketch: SketchType;
  fallback?: ReactNode;
  children?: ReactNode;
};
