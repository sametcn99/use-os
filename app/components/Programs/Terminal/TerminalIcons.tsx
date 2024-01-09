"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopIcon from "../../Desktop/DesktopIcon";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";
import { setTerminalOpen } from "@/lib/redux/slicers/TerminalSlicer";

export function TerminalDesktopIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.terminal);

  const onClick = () => {
    if (isOpen.value === false) {
      dispatch(setTerminalOpen());
    }
  };

  return (
    <>
      <DesktopIcon onClick={onClick}>
        <span>{ProgramConfigs.Terminal.title}</span>
      </DesktopIcon>
    </>
  );
}
