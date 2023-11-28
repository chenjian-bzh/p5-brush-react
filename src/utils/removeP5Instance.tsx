import { MutableRefObject } from "react";
import { P5WithBrushInstnace } from "../interface";

const removeP5Instance = (
  instance: MutableRefObject<P5WithBrushInstnace | null>
) => {
  instance.current?.remove();
  instance.current = null;
};

export default removeP5Instance;
