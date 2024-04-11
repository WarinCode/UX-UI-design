import { ReactElement, FC, useState } from "react";
import AllComponentsProps from "../types/types";

const EachItemType3: FC<AllComponentsProps.EachItemT3<HTMLDivElement>> = (
  props: AllComponentsProps.EachItemT3<HTMLDivElement>
): ReactElement<HTMLDivElement> => {
  const {
    item,
    itemClassName,
    iconClassName,
    icon,
  }: AllComponentsProps.EachItemT3<HTMLDivElement> = props;
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div
      {...props}
      onMouseOut={(): void => setHidden(true)}
      onMouseMove={(): void => setHidden(false)}
    >
      <h4 className={"" + itemClassName === undefined ? "" : itemClassName}>
        {item}
      </h4>
      {!hidden && (
        <div
          className={
            "w-full" + iconClassName === undefined ? "" : iconClassName
          }
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default EachItemType3;
