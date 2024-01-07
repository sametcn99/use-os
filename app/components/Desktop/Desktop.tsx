import React from "react";
import dynamic from "next/dynamic";
import ProgramConfigs from "@/app/Utils/Programs/ProgramConfigs";

export default function Desktop() {
  // Dynamically import the Time component with client-side rendering
  const TimeWidget = dynamic(
    () => import("@/app/components/Programs/Widget/TimeWidget"),
    {
      ssr: false, // Disable server-side rendering for this component
    },
  );
  return (
    <section className="grid h-full w-full grid-cols-12 gap-4 overflow-y-hidden p-4">
      {Object.values(ProgramConfigs).map((config) => (
        <config.desktopIcon key={config.title} />
      ))}
      <TimeWidget />
    </section>
  );
}
