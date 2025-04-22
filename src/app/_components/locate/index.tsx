import Image from "next/image";
import styles from "./locate.module.css";
import goodmayes from "../../../assets/img/goodmayes.jpg";
import barking from "../../../assets/img/barking.webp";
import dagenham from "../../../assets/img/dagenham.jpg";
import towerhamlets from "../../../assets/img/towerhamlets.webp";
import canarywharf from "../../../assets/img/canarywharf.jpg";
import thurrock from "../../../assets/img/thurrock.jpg";
import React from "react";
import { PostcodeEntry } from "./locatePostcode";

export const Locate = () => {
  return (
    <div className={styles.section}>
      <div className={styles.text}>
        <h2>Nitrous Driving School near you</h2>
        <p>Nitrous Driving School serves the following locations.</p>
      </div>

      <div className="contentSpan">
        <PostcodeEntry />
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Image src={goodmayes} alt="A picture of Goodmayes station" />
          <div>
            <p>Goodmayes</p>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={barking}
            alt="A picture of an apartment complex watching River Roding in Barking"
          />
          <div>
            <p>Barking</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={dagenham} alt="A picture of Dagenham East station" />
          <div>
            <p>Dagenham</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={towerhamlets} alt="A picture of Tower Hamlets" />
          <div>
            <p>Tower Hamlets</p>
          </div>
        </div>

        <div className={styles.card}>
          <Image src={canarywharf} alt="A picture of Canary Wharf" />
          <div>
            <p>Canary Wharf</p>
          </div>
        </div>

        <div className={styles.card}>
          <Image src={thurrock} alt="A picture of Lakeside, Thurrock" />
          <div>
            <p>Thurrock</p>
          </div>
        </div>
      </div>
    </div>
  );
};
