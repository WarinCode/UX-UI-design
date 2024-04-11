import React, { JSX } from "react";

namespace AllComponentsProps {
  type BaseGeneric = HTMLElement | Element;
  interface BaseProps<T extends BaseGeneric> extends React.HTMLAttributes<T> {}
  export interface AppProps<T extends BaseGeneric> extends BaseProps<T> {}
  export interface ProfileProps<
    T extends string | undefined,
    D extends BaseGeneric,
    A extends JSX.Element | React.ReactElement | undefined,
    K extends React.CSSProperties = React.CSSProperties
  > extends BaseProps<D> {
    userImg: T;
    username: T;
    accountName: T;
    icon: A;
    iconStyle?: K;
  }
  export interface MenuProps<T extends BaseGeneric> extends BaseProps<T> {
    children: React.ReactNode;
  }
  export interface CardProps<T extends BaseGeneric> extends BaseProps<T> {}
  export interface LiProps<
    T extends BaseGeneric,
    D extends ModelTypes.LiType1 | ModelTypes.LiType2 | ModelTypes.LiType3
  > extends BaseProps<T> {
    data: D;
  }
  export interface BtnProps<T extends BaseGeneric> extends BaseProps<T> {
    icon: JSX.Element;
  }
  export interface LineProps<T extends BaseGeneric> extends BaseProps<T> {}
  export interface EachItemT3<T extends BaseGeneric> extends BaseProps<T>{
    item: string;
    icon: JSX.Element;
    itemClassName?: string;
    iconClassName?: string;
  }
}

export default AllComponentsProps;

export namespace ModelTypes {
  export interface EachMenu {
    title: string;
    icon: JSX.Element;
  }
  export type NestedMenu = EachMenu & { list: string[] };
  export type MenuList = EachMenu[];
  export type LiType1 = MenuList;
  export type LiType2 = EachMenu;
  export type LiType3 = NestedMenu;
}
