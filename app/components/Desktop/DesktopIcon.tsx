import { getRandomColor } from "@/app/Utils/utils";
import React from "react";

export default function DesktopIcon({
  children,
  onClick,
}: {
  children: any;
  onClick: any;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-[5rem] w-[5rem] flex-col items-center justify-center gap-2 hover:underline"
    >
      <div
        className={`h-[3rem] w-[3rem] rounded-lg hover:bg-purple-900`}
        style={{ background: getRandomColor() }}
      />
      {children}
    </button>
  );
}
