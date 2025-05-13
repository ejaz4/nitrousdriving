import { joinClasses } from "@/util/joinClasses";
import React from "react";
import styles from "./slideshow.module.css";

export const Slideshow = () => {
  return (
    <div className={joinClasses("contentBleed", styles.container)}>
      <div className={styles.videoContainer}>
        <video
          className={joinClasses("contentBleed", styles.video)}
          src="/vid/nitrousdriving.webm"
          muted
          controls={false}
          autoPlay
          loop
        />
        <div className={styles.videoText}>
          <h1>
            Driving School <br />
            Based in East
            <br />
            London
          </h1>
        </div>
      </div>
    </div>
  );
};
