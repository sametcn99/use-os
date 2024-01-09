import ProgramLauncher from "@/app/utils/programs/ProgramLauncher";
import React from "react";
import Terminal from "./Terminal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setTerminalOpen } from "@/lib/redux/slicers/TerminalSlicer";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";

export default function TerminalLauncher() {
  const isOpen = useSelector((state: RootState) => state.terminal);
  const dispatch = useDispatch();
  return (
    <ProgramLauncher
      size="w-[50rem] h-[25rem]"
      isOpen={isOpen}
      dispatch={dispatch}
      slice={setTerminalOpen}
      name={ProgramConfigs.Terminal.title}
    >
      <Terminal />
    </ProgramLauncher>
  );
}
