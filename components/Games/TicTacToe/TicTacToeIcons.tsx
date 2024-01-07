"use client";
import { setTıcTacToeOpen } from "@/lib/redux/slicers/TicTacToeSlicer";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TicTacToeLauncher from "./TıcTacToeLauncher";
import DesktopIcon from "@/components/Desktop/DesktopIcon";
import DockIcon from "@/components/Dock/Icon";

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
      <DesktopIcon onClick={handleClick}>
        <span>TıcTacToe</span>
      </DesktopIcon>
      <TicTacToeLauncher />
    </>
  );
}
export function TicTacToeDockIcon() {
  const isOpen = useSelector((state: RootState) => state.ticTacToeIsOpen);
  if (isOpen.value === false) return <></>;
  return (
    <DockIcon>
      <span>TicTacToe</span>
    </DockIcon>
  );
}
