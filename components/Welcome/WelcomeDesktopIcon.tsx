"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setWelcomeOpen } from "@/lib/redux/slicers/WelcomeSlicer";
import Welcome from "./Welcome";

export default function WelcomeDesktopIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);

  const handleClick = () => {
    if (isOpen.value === false) {
      dispatch(setWelcomeOpen());
    }
  };

  return (
    <>
      <button
        className="flex  h-fit  w-fit  flex-col gap-1 hover:underline"
        onClick={handleClick}
      >
        <div className="  h-[3rem] w-[3rem] bg-slate-600 hover:bg-slate-700 " />
        <span>Welcome</span>
      </button>
      <Welcome />
    </>
  );
}
