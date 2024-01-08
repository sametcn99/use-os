"use client";
// Importing necessary dependencies and components
import React, { useEffect, useState } from "react";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";
import { Settings } from "@/types/types";
import useSettings from "@/app/hooks/useSettings";

// Main Desktop component
export default function Desktop() {
  // State to store settings
  const [settings, setSettings] = useState<Settings | null>(null);
  useSettings();
  // useEffect to fetch settings when the component mounts
  useEffect(() => {
    // Retrieving stored settings from local storage
    const storedSettings: Settings | null = JSON.parse(
      window.localStorage.getItem("settings") || "null",
    );
    // Updating state with the fetched settings
    setSettings(storedSettings);
  }, []); // Empty dependency array ensures this effect runs only once

  // Render the component
  return (
    <section
      // Applying dynamic styles based on settings
      className={`grid h-full w-full grid-cols-12 gap-4 overflow-y-hidden p-4`}
      style={{ background: settings?.desktopColor, color: settings?.textColor }}
    >
      {/* Mapping through desktop icons and rendering them */}
      {Object.values(ProgramConfigs).map((config) => (
        <config.desktopIcon key={config.title} />
      ))}

      {/* Mapping through program launchers and rendering them */}
      {Object.values(ProgramConfigs).map((config) => (
        <config.launcher key={config.title} />
      ))}
    </section>
  );
}
