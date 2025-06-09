import Image, { StaticImageData } from "next/image";
import goodmayes from "@/assets/img/goodmayes.jpg";
import styles from "./location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationGrid } from "../_components/locate";

export const LocationConstruction = ({
  name,
  description,
  image,
  id,
}: {
  name: string;
  description: string;
  image: StaticImageData;
  id: string;
}) => {
  return (
    <>
      <div className={joinClasses("contentBleed")}>
        <Image
          src={image}
          className={styles.headlineImage}
          width={undefined}
          height={undefined}
          alt={name}
        />
      </div>
      <div className={joinClasses("contentSpan", styles.textArt)}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <div className={joinClasses("contentSpan")}>
        <h2>Nitrous Driving Locations</h2>
      </div>

      <LocationGrid without={[id]} />
    </>
  );
};
