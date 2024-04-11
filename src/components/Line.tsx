import { ReactElement, FC } from "react";
import AllComponentsProps from "../types/types";

const Line: FC<AllComponentsProps.LineProps<HTMLDivElement>> = (
  props: AllComponentsProps.LineProps<HTMLDivElement>
): ReactElement => {
  return (
    <div
      {...props}
      className={`line w-full h-[1px] mb-5 ${
        props.className === undefined ? "" : props.className
      }`}
    ></div>
  );
};

export default Line;
