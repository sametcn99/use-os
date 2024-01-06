import React from "react";
import Start from "../Start/Start";

export default function Dock() {
  return (
    <nav className="fixed bottom-0 z-50 h-[3rem] w-full gap-2 bg-slate-500">
      <Start />
    </nav>
  );
}
