"use client";
import { MapPinIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { isValid, parse } from "postcode";
import { useEffect, useRef, useState } from "react";

export const PostcodeEntry = ({
  defaultValue = "",
}: {
  defaultValue?: string;
}) => {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const queryPostcode = (postcode: string) => {
    console.log(postcode);

    if (!isValid(postcode)) {
      setError("Invalid postcode");
      return;
    }
    const parsed = parse(postcode);

    if (!parsed) {
      setError("Invalid postcode");
      return;
    }

    if (!parsed.postcode) {
      setError("Full postcode required");
      return;
    }

    const { area, district, sector } = parsed;
    console.log(parsed);

    router.push(`/locate/${parsed.postcode.split(" ").join("")}`);
  };

  useEffect(() => {
    if (!inputRef.current) return;

    if (error) {
      inputRef.current.style.color = "red";
    } else {
      inputRef.current.style.color = "black";
    }
  }, [error]);

  return (
    <div className="textWithIcon">
      <div className="icon">
        <MapPinIcon size={24} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const input = form.querySelector("input") as HTMLInputElement;
          queryPostcode(input.value);
        }}
      >
        <input
          type="text"
          ref={inputRef}
          onInput={(e) => {
            (e.target as HTMLInputElement).style.color = "black";
          }}
          defaultValue={defaultValue}
          placeholder="Enter your postcode"
        />
      </form>
    </div>
  );
};
