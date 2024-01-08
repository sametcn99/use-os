"use client";
import React, { useEffect, useState } from "react";
import Start from "../Start/Start";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";
import { Settings } from "@/types/types";

export default function Dock() {
  // State to store settings
  const [settings, setSettings] = useState<Settings | null>(null);

  // useEffect to fetch settings when the component mounts
  useEffect(() => {
    // Retrieving stored settings from local storage
    const storedSettings: Settings | null = JSON.parse(
      window.localStorage.getItem("settings") || "null",
    );
    // Updating state with the fetched settings
    setSettings(storedSettings);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav
      className="fixed bottom-0 z-50 flex h-[rem] w-full flex-row gap-2 "
      style={{ background: settings?.dockColor }}
    >
      <Start />
      {Object.values(ProgramConfigs).map((config) => (
        <config.dockIcon key={config.title} />
      ))}
    </nav>
  );
}
