import Image from "next/image";
import towerhamlets from "@/assets/img/towerhamlets.webp";
import styles from "../location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationConstruction } from "../constructor";

const LocationPage = () => {
  return (
    <LocationConstruction
      name={"Tower Hamlets"}
      description={
        "Tower Hamlets provides an exceptionally diverse and demanding environment for learning to drive. Navigating its congested urban roads, intricate multi-lane junctions, and numerous one-way systems sharpens essential skills like hazard perception and lane discipline. Learners will encounter a blend of quieter residential streets for fundamental manoeuvres and bustling main thoroughfares, exposing them to varied traffic conditions and speeds. The high volume of pedestrians and cyclists throughout the area fosters crucial defensive driving techniques and heightened awareness. Ultimately, the challenging and varied road network within Tower Hamlets thoroughly prepares students to become highly adaptable and confident drivers for any urban setting."
      }
      image={towerhamlets}
      id={"towerhamlets"}
    />
  );
};

export default LocationPage;
