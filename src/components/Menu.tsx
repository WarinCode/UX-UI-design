import { ReactElement, FC } from "react";
import AllComponentsProps from "../types";

const Menu: FC<AllComponentsProps.MenuProps<HTMLDivElement>> = (
  props: AllComponentsProps.MenuProps<HTMLDivElement>
): ReactElement => {
  const { className, children }: AllComponentsProps.MenuProps<HTMLDivElement> = props;
  return (
    <div
      {...props}
      className={`w-full ${className === undefined ? "" : className}`}
    >
      <ul className="list-none">{children}</ul>
    </div>
  );
};

export default Menu;
