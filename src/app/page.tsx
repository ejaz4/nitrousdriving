import Image from "next/image";
import styles from "./page.module.css";
import { Locate } from "./_components/locate";
import { Slideshow } from "./_components/slideshow";

export default function Home() {
  return (
    <>
      <Slideshow />
      <Locate />
    </>
  );
}
