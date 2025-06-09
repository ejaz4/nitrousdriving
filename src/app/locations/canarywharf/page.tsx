import Image from "next/image";
import canarywharf from "@/assets/img/canarywharf.jpg";
import styles from "../location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationConstruction } from "../constructor";

const LocationPage = () => {
  return (
    <LocationConstruction
      name={"Canary Wharf"}
      description={
        "Canary Wharf offers an intense, highly effective learning environment for driving lessons, immersing students in complex urban traffic, multi-lane junctions, and constant pedestrian/cyclist presence. This provides unparalleled experience in hazard perception, defensive driving, and navigating challenging one-way systems. While it lacks a local driving test centre, the skills gained here—like mastering tight spaces and busy dual carriageways—are invaluable for any city driver. Instructors in this demanding area are typically highly experienced, ensuring comprehensive training. For those seeking to confidently tackle any urban road, Canary Wharf provides a uniquely challenging yet rewarding foundation."
      }
      image={canarywharf}
      id={"canarywharf"}
    />
  );
};

export default LocationPage;
