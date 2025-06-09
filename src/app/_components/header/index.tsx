"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import Logo from "../../../assets/svg/logo-original-scaled.svg";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Hamburger } from "../hamburger";
import { BookingForm } from "../bookingForm";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

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
            <Logo />
          </Link>
        </div>
        <div className="right">
          <button
            onClick={() => setContactOpen(true)}
            className={style.contactButton}
          >
            <p>Contact</p>
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
