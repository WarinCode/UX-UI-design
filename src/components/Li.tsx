import { ReactElement, FC, useState } from "react";
import AllComponentsProps, { ModelTypes } from "../types/types";
import Models from "../models/models";
import EachItemType3 from "./EachItemType3";
import uuid from "react-uuid";

namespace Li {
  export const T1: FC<
    AllComponentsProps.LiProps<HTMLLIElement, ModelTypes.LiType1>
  > = ({ data, style, className }): ReactElement => {
    return (
      <>
        {data.map(
          ({ title, icon }: ModelTypes.EachMenu): ReactElement => (
            <li
              key={uuid()}
              className={`w-full flex items-center justify-start my-4 ${
                className === undefined ? "" : className
              }`}
              style={style}
            >
              <span className="cursor-pointer">{icon}</span>
              <h2 className="text-xl text-slate-50 ml-3 capitalize cursor-pointer">
                {title}
              </h2>
            </li>
          )
        )}
      </>
    );
  };

  export const T2: FC<
    AllComponentsProps.LiProps<HTMLLIElement, ModelTypes.LiType2>
  > = ({ data: { title, icon }, className, style }): ReactElement => {
    return (
      <li
        className={`w-full flex items-center justify-start my-4 capitalize ${
          className === undefined ? "" : className
        }`}
        style={style}
      >
        <span className="cursor-pointer">{icon}</span>
        <h2 className="text-xl text-slate-50 ml-3 cursor-pointer">{title}</h2>
      </li>
    );
  };

  export const T3: FC<
    AllComponentsProps.LiProps<HTMLLIElement, ModelTypes.LiType3>
  > = ({ data: { title, icon, list }, className, style }): ReactElement => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
      <li
        className={className === undefined ? "" : className}
        style={style}
        onClick={(): void => setToggle(!toggle)}
      >
        <div className="w-3/4 flex items-center justify-between">
          <div className=" flex items-center justify-center">
            <span className="cursor-pointer">{icon}</span>
            <h2 className="text-xl text-slate-50 ml-3 cursor-pointer capitalize">
              {title}
            </h2>
          </div>
          <div className="cursor-pointer">
            {toggle ? Models.Icons.arrowDown : Models.Icons.arrowUp}
          </div>
        </div>
        {toggle && (
          <div className="w-3/4">
            <div className="w-full grid grid-cols-2 grid-flow-row items-center py-3">
              <div className="straight-line row-span-4 ms-3"></div>
              {list.map(
                (item: string): ReactElement<HTMLDivElement> => (
                  <EachItemType3
                    key={uuid()}
                    className={
                      "w-full cursor-default flex items-center justify-between my-3 relative -left-2/3"
                    }
                    item={item}
                    itemClassName={
                      "text-[17px] capitalize text-slate-50 cursor-pointer"
                    }
                    icon={Models.Icons.arrowRight}
                    iconClassName={"absolute -right-1/4"}
                  />
                )
              )}
            </div>
          </div>
        )}
      </li>
    );
  };
}

export default Li;
