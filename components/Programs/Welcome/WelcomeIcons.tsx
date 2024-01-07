"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWelcomeOpen } from "@/lib/redux/slicers/WelcomeSlicer";
import Welcome from "./Welcome";
import DockIcon from "@/components/Dock/Icon";
import DesktopIcon from "@/components/Desktop/DesktopIcon";

export default function WelcomeDockIcon() {
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);
  if (isOpen.value === false) return <></>;
  return (
    <DockIcon>
      <span>Welcome</span>
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
        <span>Welcome</span>
      </DesktopIcon>
      <Welcome />
    </>
  );
}
