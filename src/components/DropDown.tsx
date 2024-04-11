import { ReactElement, FC, useState } from "react";
import AllComponentsProps from "../types";

const DropDown: FC<AllComponentsProps.DropDown<HTMLDivElement>> = (
  props: AllComponentsProps.DropDown<HTMLDivElement>
): ReactElement<HTMLDivElement> => {
  const {
    item,
    itemClassName,
    iconClassName,
    icon,
  }: AllComponentsProps.DropDown<HTMLDivElement> = props;
  const [hover, setHover] = useState<boolean>(true);

  return (
    <div
      {...props}
      onMouseOut={(): void => setHover(true)}
      onMouseMove={(): void => setHover(false)}
    >
      <a href="#">
        <h4 className={"" + itemClassName === undefined ? "" : itemClassName}>
          {item}
        </h4>
      </a>

      {!hover && (
        <div
          className={
            "w-full" + iconClassName === undefined ? "" : iconClassName
          }
        >
          <a href="#">{icon}</a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
