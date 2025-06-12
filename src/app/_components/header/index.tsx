"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import Logo64 from "../../../assets/svg/logo-original-scaled.svg";
import Logo48 from "../../../assets/svg/logo-original-48.svg";
import Whatsapp from "../../../assets/svg/whatsapp-blue.svg";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Hamburger } from "../hamburger";
import { BookingForm } from "../bookingForm";
import { useMediaQuery } from "@/util/useMediaQuery";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const isMobile = useMediaQuery(768);

  return (
    <>
      <div className={style.header}>
        <div>
          <div onClick={() => setMenuOpen(true)}>
            <MenuIcon size={24} />
          </div>
        </div>
        <div className="centre">
          <Link href={"/"}>
            {!isMobile && <Logo64 />}
            {isMobile && <Logo48 />}
          </Link>
        </div>
        <div className="right">
          <button
            onClick={() => setContactOpen(true)}
            className={style.contactButton}
          >
            <Whatsapp />
            {!isMobile && <p>Contact</p>}
          </button>
        </div>
      </div>
      {menuOpen && <Hamburger setMenuOpen={setMenuOpen} />}
      {contactOpen && (
        <div
          onClick={(e) => setContactOpen(false)}
          className={style.bookingFormBackground}
        >
          <div
            className={style.bookingForm}
            onClick={(e) => e.stopPropagation()}
          >
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
};
