import React from "react";
import style from "./header.module.css";
import Logo from "../../../assets/svg/logo-original-scaled.svg";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <MenuIcon size={24} />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <button>hi</button>
      </div>
    </div>
  );
};
