import React, { FC, ReactNode } from "react";
import Nav from "../../Layout/Nav/Nav";
import Section from "../../UI/Section/Section";
import Facebook from "../Facebook";
import Twitter from "../Twitter";
import Instagram from "../Instagram";

type Props = {};

const SocialMediaIcons: FC<Props> = () => {
  return (
    <div className="flex gap-[1rem] items-center cursor-pointer">
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  );
};

export default SocialMediaIcons;
