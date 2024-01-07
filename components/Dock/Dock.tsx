import React from "react";
import Start from "../Start/Start";
import WelcomeDockIcon from "../Welcome/WelcomeDockIcon";

export default function Dock() {
  return (
    <nav className="fixed bottom-0 z-50 flex h-[3rem] w-full flex-row gap-2 bg-slate-500">
      <Start />
      <WelcomeDockIcon />
    </nav>
  );
}
