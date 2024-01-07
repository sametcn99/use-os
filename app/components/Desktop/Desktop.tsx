"use client";
import React from "react";
import ProgramConfigs from "@/app/Utils/Programs/ProgramConfigs";

export default function Desktop() {
  return (
    <section className="default-desktop-color grid h-full w-full grid-cols-12 gap-4 overflow-y-hidden p-4">
      {Object.values(ProgramConfigs).map((config) => (
        <config.desktopIcon key={config.title} />
      ))}
      {Object.values(ProgramConfigs).map((config) => (
        <config.launcher key={config.title} />
      ))}
    </section>
  );
}
