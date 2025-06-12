import styles from "./hamburger.module.css";
import headerStyles from "../header/header.module.css";
import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react";
import Logo from "../../../assets/svg/logo-original-scaled.svg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { joinClasses } from "@/util/joinClasses";
import { usePathname } from "next/navigation";

export const Hamburger = ({
  setMenuOpen,
}: {
  setMenuOpen: (open: boolean) => void;
}) => {
  const [menuClosing, setMenuClosing] = useState(false);
  const [pathname, setPathname] = useState(0);
  const pn = usePathname();

  useEffect(() => {
    if (!menuClosing) return;

    const timer = setTimeout(() => {
      setMenuOpen(false);
    }, 1000); // Match the CSS transition duration
  }, [menuClosing]);

  useEffect(() => {
    console.log(pathname);
    if (pathname > 1) {
      setMenuClosing(true);
    }
  }, [pathname]);

  useEffect(() => {
    setPathname((prev) => prev + 1);
  }, [pn]);

  return (
    <div
      className={joinClasses(
        styles.fullScreen,
        menuClosing ? styles.closingMenu : ""
      )}
    >
      <div className="app">
        <div className={headerStyles.header}>
          <div>
            <div onClick={() => setMenuClosing(true)}>
              <XIcon size={24} />
            </div>
          </div>
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div>{/* <button>hi</button> */}</div>
        </div>

        <div
          className={joinClasses(
            "contentSpan",
            styles.menu,
            menuClosing ? styles.closing : ""
          )}
        >
          {/* <Link
            href={"/gallery"}
            onAnimationEndCapture={() => {
              if (menuClosing) {
                setMenuOpen(false);
              }
            }}
          >
            <h1>Gallery</h1>
          </Link> */}

          <div className={styles.entryContent}>
            <h1>Locations</h1>
            <div className={styles.section}>
              <div className={styles.column}>
                <p>
                  <b>Main tracks</b>
                </p>
                <Link href={"/locations/goodmayes"}>
                  <p>Goodmayes</p>
                  <ChevronRightIcon size={16} />
                </Link>

                <Link href={"/locations/barking"}>
                  <p>Barking</p>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>

              <div className={styles.column}>
                <p>
                  <b>Other locations</b>
                </p>
                <Link href={"/locations/dagenham"}>
                  <p>Dagenham</p> <ChevronRightIcon size={16} />
                </Link>

                {/* <Link href={"/locations/newham"}>
                  <p>Newham</p>
                  <ChevronRightIcon size={16} />
                </Link> */}

                <Link href={"/locations/towerhamlets"}>
                  <p>Tower Hamlets</p>
                  <ChevronRightIcon size={16} />
                </Link>

                <Link href={"/locations/canarywharf"}>
                  <p>Canary Wharf</p>
                  <ChevronRightIcon size={16} />
                </Link>

                <Link href={"/locations/thurrock"}>
                  <p>Thurrock</p>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>

              <div className={styles.column}>
                <p>
                  <b>Anything else?</b>
                </p>
                <Link href={"/locate/check"}>
                  <p>Check your postcode</p>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.entryContent}>
            <Link href={"/about"}>
              <h1>About</h1>
              <ChevronRightIcon size={24} />
            </Link>
          </div>

          <div className={styles.entryContent}>
            <h1>Resources</h1>
            <div className={styles.section}>
              <div className={styles.column}>
                <Link href={"https://www.gov.uk/book-theory-test"}>
                  <p>Book a theory test</p>
                  <ChevronRightIcon size={16} />
                </Link>

                <Link href={"https://www.gov.uk/book-driving-test"}>
                  <p>Book a driving test</p>
                  <ChevronRightIcon size={16} />
                </Link>

                <Link
                  href={
                    "https://www.gov.uk/government/publications/car-show-me-tell-me-vehicle-safety-questions/car-show-me-tell-me-vehicle-safety-questions"
                  }
                >
                  <p>&apos;show me, tell me&apos; questions</p>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.entryContent}>
            <h1>Legal</h1>
            <div className={styles.section}>
              <div className={styles.column}>
                {/* <Link href={"/legal/terms"}>
                  <p>Terms of Service</p>
                  <ChevronRightIcon size={16} />
                </Link>

                <Link href={"/legal/privacy"}>
                  <p>Privacy Policy</p>
                  <ChevronRightIcon size={16} />
                </Link> */}

                <Link href={"/legal/booking"}>
                  <p>Booking and Cancellation Policy</p>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
