import { ReactElement, FC } from "react";
import AllComponentsProps from "../types";

const Btn: FC<AllComponentsProps.BtnProps<HTMLDivElement>> = (
  props: AllComponentsProps.BtnProps<HTMLDivElement>
): ReactElement<HTMLDivElement> => {
  const { icon, className }: AllComponentsProps.BtnProps<HTMLDivElement> = props;

  return (
    <div
      {...props}
      className={`absolute top-[43%] right-0 w-[50px] h-[100px] rounded-s-full box-border p-4 cursor-pointer ${className === undefined ? "" : className}`}
    >
      {icon}
    </div>
  );
};

export default Btn;
