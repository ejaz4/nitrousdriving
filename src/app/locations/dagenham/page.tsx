import Image from "next/image";
import dagenham from "@/assets/img/dagenham.jpg";
import styles from "../location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationConstruction } from "../constructor";

const LocationPage = () => {
  return (
    <LocationConstruction
      name={"Dagenham"}
      description={
        "Dagenham provides an excellent and diverse environment for learning to drive, blending quieter residential streets ideal for fundamental manoeuvres with busier main roads and commercial areas like The Heathway. Learners will gain vital experience navigating various roundabout types and complex junctions, developing crucial anticipation and road awareness skills. The area's proximity to major dual carriageways, such as the A13, allows for practice at higher speeds and mastering merging techniques."
      }
      image={dagenham}
      id={"dagenham"}
    />
  );
};

export default LocationPage;
