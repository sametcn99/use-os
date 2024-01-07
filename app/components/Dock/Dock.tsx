import React from "react";
import Start from "../Start/Start";
import ProgramConfigs from "@/app/Utils/Programs/ProgramConfigs";

export default function Dock() {
  return (
    <nav className="fixed bottom-0 z-50 flex h-[rem] w-full flex-row gap-2 bg-purple-950">
      <Start />
      {Object.values(ProgramConfigs).map((config) => (
        <config.dockIcon key={config.title} />
      ))}
    </nav>
  );
}
