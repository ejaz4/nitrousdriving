import Image from "next/image";
import goodmayes from "@/assets/img/goodmayes.jpg";
import styles from "../location.module.css";
import { joinClasses } from "@/util/joinClasses";
import { LocationConstruction } from "../constructor";

const LocationPage = () => {
  return (
    <LocationConstruction
      name={"Goodmayes"}
      description={
        "Our primary driving track, a perfect location for driving with a variety of road conditions that simulate real life driving. Goodmayes has quieter residential streets, busier main roads such as Green Lane, complex roundabouts and proximity to dual carriageways."
      }
      image={goodmayes}
      id={"goodmayes"}
    />
  );
};

export default LocationPage;
