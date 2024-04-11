import { FC, ReactElement } from "react";
import AllComponentsProps from "../types";

const Profile: FC<AllComponentsProps.ProfileProps<string, HTMLDivElement, JSX.Element>> = (
  props: AllComponentsProps.ProfileProps<string, HTMLDivElement, JSX.Element>
): ReactElement<HTMLDivElement> => {
  const {
    userImg,
    username,
    accountName,
    icon,
    iconStyle,
    className,
  }: AllComponentsProps.ProfileProps<string, HTMLDivElement, JSX.Element> = props;

  return (
    <div
      {...props}
      className={`flex items-center justify-between w-full mb-12 ${
        className === undefined ? "" : className
      }`}
    >
      <div className="inline-flex">
        <img
          src={userImg}
          alt="user-profile"
          className="w-[50px] h-[50px] rounded-full object-cover"
          loading="lazy"
        />
        <div className="ml-2 cursor-default text-slate-50">
          <h3 className="font-bold text-lg capitalize">{username}</h3>
          <p className="tracking-wide text-sm">@{accountName}</p>
        </div>
      </div>
      <div
        className="w-10 h-10 rounded-full p-2 cursor-pointer bg-gradient-to-b from-[#ffffff75] to-transparent"
        style={iconStyle}
      >
        {icon}
      </div>
    </div>
  );
};

export default Profile;
