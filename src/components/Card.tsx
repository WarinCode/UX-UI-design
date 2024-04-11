import { ReactElement, FC } from "react";
import AllComponentsProps from "../types/types.tsx";
import Models from "../models/models.tsx";

import Profile from "./Profile";
import Menu from "./Menu";
import Li from "./Li";
import Line from "./Line";
import Btn from "./Btn";

const Card: FC<AllComponentsProps.CardProps<HTMLElement>> = (
  props: AllComponentsProps.CardProps<HTMLElement>
): ReactElement<HTMLElement> => {

  return (
    <section
      {...props}
      className={`w-[370px] h-max flex flex-col items-start justify-stretch backdrop-blur-md rounded-3xl p-10 relative ${
        props.className === undefined ? "" : props.className
      }`}
    >
      <Profile
        username={Models.UserData.username}
        accountName={Models.UserData.userAccountName}
        userImg={Models.UserData.userImg}
        icon={Models.Icons.settings}
      />
      <Line />
      <Menu>
        <Li.T1 data={Models.menu1} />
        <Li.T3 data={Models.menu2} />
        <Li.T1 data={Models.menu3} />
      </Menu>
      <Line className="mt-5" />
      <Menu>
        <Li.T2 data={Models.logout} style={{ textTransform: "initial" }} />
      </Menu>
      <Btn icon={Models.Icons.arrowLeft} className={"btn"} />
    </section>
  );
};

export default Card;
