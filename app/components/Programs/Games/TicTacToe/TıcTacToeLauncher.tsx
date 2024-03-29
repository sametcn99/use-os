"use client";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import TicTacToe from "./TicTacToe";
import { setTıcTacToeOpen } from "@/lib/redux/slicers/TicTacToeSlicer";
import ProgramLauncher from "@/app/utils/programs/ProgramLauncher";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";

export default function TicTacToeLauncher() {
  const isOpen = useSelector((state: RootState) => state.ticTacToeIsOpen);
  const dispatch = useDispatch();

  return (
    <ProgramLauncher
      name={ProgramConfigs.TicTacToe.title}
      isOpen={isOpen}
      dispatch={dispatch}
      slice={setTıcTacToeOpen}
      size="h-[35rem] w-[25rem]"
    >
      <TicTacToe />
    </ProgramLauncher>
  );
}
