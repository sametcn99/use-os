"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWelcomeOpen } from "@/lib/redux/slicers/WelcomeSlicer";
import DockIcon from "../../Dock/Icon";
import DesktopIcon from "../../Desktop/DesktopIcon";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";

export default function WelcomeDockIcon() {
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);
  if (isOpen.value === false) return <></>;
  return (
    <DockIcon>
      <span>{ProgramConfigs.Welcome.title}</span>
    </DockIcon>
  );
}

export function WelcomeDesktopIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);

  const onClick = () => {
    if (isOpen.value === false) {
      dispatch(setWelcomeOpen());
    }
  };

  return (
    <>
      <DesktopIcon onClick={onClick}>
        <span>{ProgramConfigs.Welcome.title}</span>
      </DesktopIcon>
    </>
  );
}
