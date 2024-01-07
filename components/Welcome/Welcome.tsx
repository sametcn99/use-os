"use client";
import { setWelcomeOpen } from "@/lib/redux/slicers/WelcomeSlicer";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import ProgramLauncher from "../Programs/ProgramLauncher";
import ProgramConfigs from "../Programs/ProgramConfigs";

export default function Welcome() {
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);
  const dispatch = useDispatch();

  return (
    <ProgramLauncher
      name={ProgramConfigs.Welcome.title}
      isOpen={isOpen}
      dispatch={dispatch}
      slice={setWelcomeOpen}
      size="h-[35rem] w-[45rem]"
    >
      <span>Welcome to </span>
      <span className="text-5xl font-bold">useOS()</span>
    </ProgramLauncher>
  );
}
