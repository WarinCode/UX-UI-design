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
  export interface MenuItemsProps<
    T extends BaseGeneric,
    D extends ModelTypes.Menu.MenuItems.Type1 | ModelTypes.Menu.MenuItems.Type2 | ModelTypes.Menu.MenuItems.Type3
  > extends BaseProps<T> {
    data: D;
  }
  export interface BtnProps<T extends BaseGeneric> extends BaseProps<T> {
    icon: JSX.Element;
  }
  export interface LineProps<T extends BaseGeneric> extends BaseProps<T> {}
  export interface DropDown<T extends BaseGeneric> extends BaseProps<T>{
    item: string;
    icon: JSX.Element;
    itemClassName?: string;
    iconClassName?: string;
  }
}

export default AllComponentsProps;

export namespace ModelTypes {
  export namespace Menu {
    export interface EachMenuItem {
      title: string;
      icon: JSX.Element;
    }
    export type DropDownMenu = EachMenuItem & { list: string[] };
    export type MenuList = EachMenuItem[];
    export namespace MenuItems {
      export type Type1 = MenuList;
      export type Type2 = EachMenuItem;
      export type Type3 = DropDownMenu;          
    }
  }
}
