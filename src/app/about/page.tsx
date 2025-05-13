import React from "react";
import { joinClasses } from "@/util/joinClasses";
import styles from "./about.module.css";
import carAtNight from "@/assets/img/gallery/IMG_2019.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={joinClasses("contentSpan", styles.mainContent)}>
      <h1>Learn to Drive with Confidence: Your Journey Starts Here 🌟</h1>
      <Image
        src={carAtNight}
        alt="Nitrous Driving School car at night time"
        width={undefined}
        height={undefined}
      />
      <h2>Established in 2006: Trusted Driving Instruction You Can Rely On</h2>
      <p>
        Since 2006, we've been proudly helping individuals learn to drive with
        confidence and skill. With years of experience behind the wheel and in
        the classroom, we’ve built a reputation for delivering high-quality
        driving instruction tailored to each student’s needs.
      </p>

      <h2>Multilingual Instructors for a Diverse Community 🌍</h2>
      <p>
        We understand that communication is key to effective learning. That’s
        why we offer multilingual driving instructors, making it easier for
        learners from various backgrounds to feel comfortable and supported
        during their lessons.
      </p>

      <h2>Theory Test Preparation Made Simple 📚</h2>
      <p>
        Preparing for the theory test can be daunting, but we’re here to help.
        Our instructors provide comprehensive support for theory test
        preparation, giving you the knowledge and confidence to pass with flying
        colours.
      </p>

      <h2>Structured Learning for Steady Progress 🛣️</h2>
      <p>
        Our lessons are designed with structure and organization in mind. This
        ensures every student can progress at their own pace while mastering
        essential driving skills. From the basics to advanced techniques, we
        guide learners every step of the way.
      </p>

      <h2>Qualified, Experienced Instructors 👨‍🏫</h2>
      <p>
        With qualified and experienced instructors, students benefit from expert
        guidance that helps them develop safe driving habits and sharpens their
        skills for the road ahead. Our goal is to turn every student into a
        responsible and confident driver.
      </p>

      <h2>Go the Extra Mile with Pass Plus 🛻💨</h2>
      <p>
        After passing the driving test, we offer Pass Plus training—a valuable
        program that enhances your driving experience by focusing on motorway
        driving, night driving, and more. It’s the perfect way to build
        confidence and become an even better driver.
      </p>
    </div>
  );
};

export default AboutPage;
