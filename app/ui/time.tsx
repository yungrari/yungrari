"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "@radix-ui/react-icons";

const getTime = (value: number) => value.toString().padStart(2, "0");

export function Time() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    function setTime() {
      const date = new Date();
      setHours(getTime(date.getHours()));
      setMinutes(getTime(date.getMinutes()));
    }

    setTime();
    const intervalId = setInterval(setTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="flex items-center gap-2">
      {!!hours && !!minutes ? (
        <span>
          <span>{hours}</span>
          <span className="animate-pulse duration-1000">:</span>
          <span>{minutes}</span>
        </span>
      ) : (
        <span className="bg-[var(--wash2)] text-transparent rounded animate-pulse">
          00:00
        </span>
      )}
      <ClockIcon />
    </section>
  );
}
