"use client";
import { redirect, useParams } from "next/navigation";
import { isValid, parse } from "postcode";
import { useEffect, useState } from "react";
import { areasServed } from "@/const/areas";
import styles from "./postcode.module.css";
import { CheckIcon, CrossIcon, XIcon } from "lucide-react";
import { joinClasses } from "@/util/joinClasses";
import { BookingForm } from "@/app/_components/bookingForm";

const PostcodeCheckPage = () => {
  const params = useParams() as { postcode: string };
  const [postcodeFormatted, setFormatted] = useState<string | null>(null);
  const [servingArea, setServingArea] = useState<boolean | null>(null);

  useEffect(() => {
    const postcodeUnformatted = params.postcode;

    if (!isValid(postcodeUnformatted)) {
      return redirect("/");
    }

    const parsed = parse(postcodeUnformatted);

    if (!parsed) {
      return redirect("/");
    }

    if (!parsed.postcode) {
      return redirect("/");
    }

    const { area, district, sector, postcode } = parsed;
    setFormatted(postcode);

    const flattenedAreas = Object.values(areasServed).flat();

    if (!flattenedAreas.includes(district)) {
      setServingArea(false);
      return;
    }

    setServingArea(true);
    return;
  }, [params.postcode]);

  return (
    <div>
      {postcodeFormatted && servingArea && (
        <div className={styles.content}>
          <div className={joinClasses(styles.chip, styles.success)}>
            <CheckIcon size={16} />
            <p>In service area</p>
          </div>
          <h2>
            Nitrous Driving School serves your area at {postcodeFormatted}
          </h2>
          <p>Get in contact to make a booking.</p>
          <BookingForm postcode={postcodeFormatted} />
        </div>
      )}

      {postcodeFormatted && !servingArea && (
        <div className={styles.content}>
          <div className={joinClasses(styles.chip, styles.error)}>
            <XIcon size={16} />
            <p>Not in service area</p>
          </div>
          <h2>We aren&apos;t available in your area at {postcodeFormatted}</h2>
        </div>
      )}
    </div>
  );
};

export default PostcodeCheckPage;
