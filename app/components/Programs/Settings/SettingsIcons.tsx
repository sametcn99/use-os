"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopIcon from "../../Desktop/DesktopIcon";
import { setSettingsOpen } from "@/lib/redux/slicers/SettingsSlicer";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";

export function SettingsDesktopIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.settings);

  const onClick = () => {
    if (isOpen.value === false) {
      dispatch(setSettingsOpen());
    }
  };

  return (
    <>
      <DesktopIcon onClick={onClick}>
        <span>{ProgramConfigs.Settings.title}</span>
      </DesktopIcon>
    </>
  );
}
