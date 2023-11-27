import { MutableRefObject } from "react";
import { P5InstanceType } from "../interface";

const removeP5Instance = (
  instance: MutableRefObject<P5InstanceType | null>
) => {
  instance.current?.remove();
  instance.current = null;
};

export default removeP5Instance;
