import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { IoFolderOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiListSettingsLine } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";
import { HiOutlineFingerPrint } from "react-icons/hi";
import {
  MdArrowBackIosNew,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

import avatar from "../assets/imgs/avatar.jpeg";

import { JSX } from "react";
import { ModelTypes } from "../types/types";

namespace Models {
  export namespace UserData {
    export const username: string = "warin";
    export const userAccountName: string = "warin.tsx";
    export const userImg: string = avatar;
  }
  export namespace IconStyles {
    export const setDefault: string = "text-slate-50 text-2xl text-center";
  }
  export const menu1: ModelTypes.MenuList = [
    {
      title: "home",
      icon: <AiOutlineHome className={IconStyles.setDefault} />,
    },
    {
      title: "projects",
      icon: <IoFolderOutline className={IconStyles.setDefault} />,
    },
  ];
  export const menu2: ModelTypes.NestedMenu = {
    title: "library",
    icon: <HiOutlineFingerPrint className={IconStyles.setDefault} />,
    list: ["favorites", "most views", "downloads", "history"],
  };
  export const menu3: ModelTypes.MenuList = [
    {
      title: "notifications",
      icon: <IoMdNotificationsOutline className={IconStyles.setDefault} />,
    },
    {
      title: "settings",
      icon: <RiListSettingsLine className={IconStyles.setDefault} />,
    },
  ];
  export const logout: ModelTypes.EachMenu = {
    title: "Log out",
    icon: <GrLogout className={IconStyles.setDefault} />,
  };

  export namespace Icons {
    export const settings: JSX.Element = (
      <GiSettingsKnobs className={IconStyles.setDefault.concat(" rotate-90")} />
    );
    export const arrowUp: JSX.Element = (
      <MdKeyboardArrowUp className={IconStyles.setDefault} />
    );
    export const arrowDown: JSX.Element = (
      <MdKeyboardArrowDown className={IconStyles.setDefault} />
    );
    export const arrowRight: JSX.Element = (
      <MdKeyboardArrowRight className={IconStyles.setDefault} />
    );
    export const arrowLeft: JSX.Element = (
      <MdArrowBackIosNew
        className={
          IconStyles.setDefault.replace("text-2xl", "text-3xl") +
          " translate-y-[55%]"
        }
      />
    );
  }
}

export default Models;
