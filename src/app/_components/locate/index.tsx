import Image, { StaticImageData } from "next/image";
import styles from "./locate.module.css";
import goodmayes from "../../../assets/img/goodmayes.jpg";
import barking from "../../../assets/img/barking.webp";
import dagenham from "../../../assets/img/dagenham.jpg";
import towerhamlets from "../../../assets/img/towerhamlets.webp";
import canarywharf from "../../../assets/img/canarywharf.jpg";
import thurrock from "../../../assets/img/thurrock.jpg";
import React from "react";
import { PostcodeEntry } from "./locatePostcode";
import Link from "next/link";

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

      <LocationGrid />
    </div>
  );
};

export const LocationGrid = ({ without }: { without?: string[] }) => {
  const locations = [
    { name: "Goodmayes", id: "goodmayes", image: goodmayes },
    { name: "Barking", id: "barking", image: barking },
    { name: "Dagenham", id: "dagenham", image: dagenham },
    { name: "Tower Hamlets", id: "towerhamlets", image: towerhamlets },
    { name: "Canary Wharf", id: "canarywharf", image: canarywharf },
    { name: "Thurrock", id: "thurrock", image: thurrock },
  ];

  return (
    <div className={styles.grid}>
      {locations
        .filter((location) => !without?.includes(location.id))
        .map((location) => (
          <Location
            key={location.id}
            name={location.name}
            id={location.id}
            image={location.image}
          />
        ))}
    </div>
  );
};

const Location = ({
  name,
  image,
  id,
}: {
  name: string;
  image: StaticImageData;
  id: string;
}) => {
  return (
    <Link className={styles.card} href={`/locations/${id}`}>
      {/* <div> */}
      <Image src={image} alt={name} />
      <div>
        <p>{name}</p>
      </div>
      {/* </div> */}
    </Link>
  );
};
