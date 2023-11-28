import React, { ReactNode, useEffect, useRef } from "react";
import { SketchType, P5WithBrushInstnace } from "../interface";
import { createInstance } from "../utils/createInstance";
import removeP5Instance from "../utils/removeP5Instance";

type P5BrushInstanceProps = {
  sketch: SketchType;
  fallback?: ReactNode;
  children?: ReactNode;
};

const P5BrushInstance: React.FC<P5BrushInstanceProps> = (props) => {
  const { sketch, fallback, children } = props;
  const mountRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<P5WithBrushInstnace | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    removeP5Instance(instanceRef);
    instanceRef.current = createInstance(sketch, mountRef.current);
  }, [sketch]);

  useEffect(() => {
    return () => {
      removeP5Instance(instanceRef);
    };
  }, []);

  if (!sketch) {
    console.error("sketch is required !");
    return fallback ? <>{fallback}</> : null;
  }

  return <div ref={mountRef}>{children}</div>;
};

export default P5BrushInstance;
