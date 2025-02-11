"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { GlobeIcon } from "@radix-ui/react-icons";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function getTemperature(latitude: string, longitude: string) {
  return latitude && longitude
    ? `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    : null;
}

function getCookie(name: string) {
  if (typeof document !== "undefined") {
    return document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${name}=`))
      ?.split("=")[1];
  }
}

export function Location() {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    setCity(getCookie("city") || "");
    setLatitude(getCookie("latitude") || "");
    setLongitude(getCookie("longitude") || "");
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
      {city ? (
        <span>{city}</span>
      ) : (
        <span className="bg-[var(--wash2)] text-transparent rounded animate-pulse">
          CITY
        </span>
      )}

      {temperature ? (
        <span>{Math.round(temperature)}°C</span>
      ) : (
        <span className="bg-[var(--wash2)] text-transparent rounded animate-pulse">
          0°C
        </span>
      )}

      <GlobeIcon />
    </section>
  );
}
