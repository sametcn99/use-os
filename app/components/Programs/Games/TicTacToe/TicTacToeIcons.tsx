"use client";
import { setTıcTacToeOpen } from "@/lib/redux/slicers/TicTacToeSlicer";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopIcon from "@/app/components/Desktop/DesktopIcon";
import DockIcon from "@/app/components/Dock/Icon";
import ProgramConfigs from "@/app/Utils/Programs/ProgramConfigs";

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
        <span>{ProgramConfigs.TicTacToe.title}</span>
      </DesktopIcon>
    </>
  );
}
export function TicTacToeDockIcon() {
  const isOpen = useSelector((state: RootState) => state.ticTacToeIsOpen);
  if (isOpen.value === false) return <></>;
  return (
    <DockIcon>
      <span>{ProgramConfigs.TicTacToe.title}</span>
    </DockIcon>
  );
}
