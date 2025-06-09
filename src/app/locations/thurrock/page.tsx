import Image from "next/image";
import thurrock from "@/assets/img/thurrock.jpg";
import styles from "../location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationConstruction } from "../constructor";

const LocationPage = () => {
  return (
    <LocationConstruction
      name={"Thurrock"}
      description={
        "Thurrock presents a comprehensive and varied landscape for learning to drive, offering a mix of road conditions to build well-rounded skills. Its streets range from quieter residential areas, perfect for practicing fundamental car control and manoeuvres, to busier urban roads and commercial hubs that introduce more complex traffic scenarios. Learners will gain valuable experience navigating diverse roundabouts and multi-lane junctions, essential for developing anticipation and road awareness. Thurrock's extensive road network also includes major dual carriageways and access to motorway links, enabling practice at higher speeds and safe merging. This blend of environments ensures a robust learning experience, fostering confident and adaptable drivers."
      }
      image={thurrock}
      id={"thurrock"}
    />
  );
};

export default LocationPage;
