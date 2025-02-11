"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "@radix-ui/react-icons";

export function Time() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setHours(date.getHours().toString().padStart(2, "0"));
      setMinutes(date.getMinutes().toString().padStart(2, "0"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex items-center gap-2">
      {!!hours && !!minutes ? (
        <span>
          <span>{hours}</span>
          <span className="animate-pulse">:</span>
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
