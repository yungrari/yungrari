"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, GearIcon, GlobeIcon } from "@radix-ui/react-icons";

const items = [
  { name: "system", icon: GearIcon },
  { name: "light", icon: SunIcon },
  { name: "dark", icon: MoonIcon },
] as const;

export function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="w-18 h-6 rounded-full bg-[var(--wash2)] text-transparent ml-auto animate-pulse" />
    );
  }

  return (
    <form className="flex items-center rounded-full ml-auto shadow-[0_0_0_1px_var(--wash1)]">
      {items.map((mode) => (
        <label className="peer cursor-pointer" key={mode.name}>
          <input
            className="peer sr-only"
            type="radio"
            name="theme"
            key={mode.name}
            value={mode.name}
            checked={mode.name === theme}
            onChange={(event) => setTheme(event.target.value)}
          />
          <span className="sr-only">{mode.name}</span>
          <span
            className="w-6 h-6 flex items-center justify-center rounded-full peer-checked:text-[var(--grey3)] peer-checked:shadow-[0_0_0_1px_var(--grey3)]"
            aria-hidden="true"
          >
            <mode.icon />
          </span>
        </label>
      ))}
    </form>
  );
}
