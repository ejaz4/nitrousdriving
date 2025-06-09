import Image from "next/image";
import barking from "@/assets/img/barking.webp";
import styles from "../location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationConstruction } from "../constructor";

const LocationPage = () => {
  return (
    <LocationConstruction
      name={"Barking"}
      description={
        "Barking offers a dynamic and practical environment for learning to drive, featuring a useful blend of road conditions. Learners will navigate quieter residential streets perfect for mastering essential manoeuvres like parking and low-speed control. The area also boasts busier main roads and commercial zones, providing crucial exposure to varying traffic densities, complex roundabouts, and busy junctions. Proximity to major dual carriageways like the A13 and A406 allows students to practice higher-speed driving, merging, and lane discipline."
      }
      image={barking}
      id={"barking"}
    />
  );
};

export default LocationPage;
