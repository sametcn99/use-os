import ProgramLauncher from "@/app/Utils/Programs/ProgramLauncher";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Settings from "./Settings";
import { setSettingsOpen } from "@/lib/redux/slicers/SettingsSlicer";
import ProgramConfigs from "@/app/Utils/Programs/ProgramConfigs";

export default function SettingsLauncher() {
  const isOpen = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  return (
    <ProgramLauncher
      size="w-[40rem] h-[30rem]"
      isOpen={isOpen}
      dispatch={dispatch}
      slice={setSettingsOpen}
      name={ProgramConfigs.Settings.title}
    >
      <Settings />
    </ProgramLauncher>
  );
}
