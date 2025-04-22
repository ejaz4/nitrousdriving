import Image from "next/image";
import styles from "./page.module.css";
import { Locate } from "./_components/locate";

export default function Home() {
  return (
    <div>
      <Locate />
    </div>
  );
}
