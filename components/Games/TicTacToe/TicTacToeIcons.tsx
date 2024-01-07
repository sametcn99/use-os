"use client";
import { setTıcTacToeOpen } from "@/lib/redux/slicers/TicTacToeSlicer";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TicTacToeLauncher from "./TıcTacToeLauncher";

export default function TicTacToeDesktopIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ticTacToeIsOpen);

  const handleClick = () => {
    if (isOpen.value === false) {
      dispatch(setTıcTacToeOpen());
    }
  };

  return (
    <>
      <button
        className="flex  h-fit  w-fit  flex-col gap-1 hover:underline"
        onClick={handleClick}
      >
        <div className="  h-[3rem] w-[3rem] bg-slate-600 hover:bg-slate-700 " />
        <span>TıcTacToe</span>
      </button>
      <TicTacToeLauncher />
    </>
  );
}
