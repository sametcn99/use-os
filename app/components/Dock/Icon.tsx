import React from "react";

export default function DockIcon({ children }: any) {
  return (
    <div className="h-[3rem] w-[3rem] text-wrap break-words rounded-lg bg-purple-900 text-center font-extrabold hover:bg-purple-800 ">
      {children}
    </div>
  );
}
