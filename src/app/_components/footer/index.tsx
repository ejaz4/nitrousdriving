import { joinClasses } from "@/util/joinClasses";
import styles from "./footer.module.css";
import SnapchatLogo from "../logos/snapchat";
import InstagramLogo from "../logos/instagram";
import Link from "next/link";
import TiktokLogo from "../logos/tiktok";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={joinClasses("contentBleed", styles.content)}>
        <div>
          <p>© Nitrous Driving School</p>
        </div>

        <div className={styles.social}>
          <Link href={"https://www.snapchat.com/add/nitrousdriving"}>
            <SnapchatLogo />
          </Link>

          <Link href={"https://www.instagram.com/nitrousdrivingschool"}>
            <InstagramLogo />
          </Link>

          <Link href={"https://www.tiktok.com/@nitrousdrivingschool"}>
            <TiktokLogo />
          </Link>
        </div>
      </div>
    </div>
  );
};
