import { joinClasses } from "@/util/joinClasses";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={joinClasses("contentBleed", styles.content)}>
        <div>
          <p>© Nitrous Driving School</p>
        </div>

        <div></div>
      </div>
    </div>
  );
};
