import React, { ReactNode, useEffect, useRef } from "react";
import { SketchType, P5InstanceType } from "../interface";
import EnhancedP5, { p5Wrapper } from "../utils/initP5Instance";
import removeP5Instance from "../utils/removeP5Instance";

type P5BrushInstanceProps = {
  sketch: SketchType;
  fallback?: ReactNode;
  children?: ReactNode;
};

const P5BrushInstance: React.FC<P5BrushInstanceProps> = (props) => {
  const { sketch, fallback, children } = props;
  const mountRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<P5InstanceType | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    removeP5Instance(instanceRef);
    // instanceRef.current = new EnhancedP5(sketch, mountRef.current);
    instanceRef.current = p5Wrapper(sketch, mountRef.current);
    console.log(instanceRef.current);
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
