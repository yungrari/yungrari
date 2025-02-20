"use client";

import { useEffect, useState } from "react";
import { GlobeIcon } from "@radix-ui/react-icons";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getTemperature = (coordinates: string) =>
  coordinates
    ? `https://api.open-meteo.com/v1/forecast?latitude=${
        coordinates.split(",")[0]
      }&longitude=${
        coordinates.split(",")[1]
      }&current=temperature_2m,weather_code`
    : null;

const getCookie = (name: string) =>
  typeof document !== "undefined"
    ? document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${name}=`))
        ?.split("=")[1] || ""
    : "";

export function Location() {
  const [coordinates, setCoordinates] = useState("");

  useEffect(() => {
    setCoordinates(getCookie("coordinates"));
  }, []);

  const {
    data: { current: { temperature_2m: temperature } = {} } = {},
    error,
  } = useSWR(getTemperature(coordinates), fetcher);

  if (error) {
    return null;
  }

  return (
    <section className="flex items-center gap-2">
      {temperature ? (
        <span>{Math.round(temperature)}°C</span>
      ) : (
        <span className="bg-(--wash2) text-transparent rounded animate-pulse">
          0°C
        </span>
      )}
      <GlobeIcon />
    </section>
  );
}
