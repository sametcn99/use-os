import React from "react";

export default function Icon({ children }: any) {
  return (
    <div className="flex  h-fit  w-fit  flex-col gap-1 hover:underline">
      <div className="  h-[3rem] w-[3rem] bg-slate-600 hover:bg-slate-700 " />
      {children}
    </div>
  );
}
