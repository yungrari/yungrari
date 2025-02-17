"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { GlobeIcon } from "@radix-ui/react-icons";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getTemperature = (latitude: string, longitude: string) =>
  latitude && longitude
    ? `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    : null;

const getCookie = (name: string) =>
  typeof document !== "undefined"
    ? document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${name}=`))
        ?.split("=")[1] || ""
    : "";

export function Location() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    setLatitude(getCookie("latitude"));
    setLongitude(getCookie("longitude"));
  }, []);

  const {
    data: { current: { temperature_2m: temperature } = {} } = {},
    error,
  } = useSWR(getTemperature(latitude, longitude), fetcher);

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
