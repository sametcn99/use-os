"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Icon() {
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);
  if (isOpen.value === false) return <></>;
  return (
    <div className="h-[3rem] w-[3rem] break-words bg-slate-600 font-extrabold hover:bg-slate-700">
      <span>Welcome</span>
    </div>
  );
}
