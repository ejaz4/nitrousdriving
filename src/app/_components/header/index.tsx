"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import Logo from "../../../assets/svg/logo-original-scaled.svg";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Hamburger } from "../hamburger";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={style.header}>
        <div>
          <div onClick={() => setMenuOpen(true)}>
            <MenuIcon size={24} />
          </div>
        </div>
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div>
          <button>hi</button>
        </div>
      </div>
      {menuOpen && <Hamburger setMenuOpen={setMenuOpen} />}
    </>
  );
};
