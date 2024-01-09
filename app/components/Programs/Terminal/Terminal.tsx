// Terminal.js
import { addCommand } from "@/lib/redux/slicers/TerminalSlicer";
import { RootState } from "@/lib/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { helpCommand } from "./help";
import useTerminal from "@/app/hooks/useTerminal";

export default function Terminal() {
  const dispatch = useDispatch();
  const inputValues = useSelector(
    (state: RootState) => state.terminal.commands,
  );
  const [currentInput, setCurrentInput] = useState("");
  const { setCommand } = useTerminal();
  const handleInputChange = (e: any) => {
    setCurrentInput(e.target.value);
  };
  const handleEnter = () => {
    if (currentInput.length > 0 && currentInput !== "help") {
      dispatch(addCommand(currentInput));
      setCommand(currentInput);
      setCurrentInput("");
    } else {
      helpCommand.map((value) => {
        dispatch(addCommand(value));
        setCurrentInput("");
      });
    }
  };

  return (
    <div className="dark h-screen w-full select-text flex-col justify-between overflow-y-scroll bg-black px-2 text-start text-green-500">
      <div>
        <span>
          Welcome to useOS terminal!
          <br />
          write `help` for see commands
        </span>
        {inputValues.map((value: any, index: any) => (
          <div key={index}>{value}</div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 border-t bg-black">
        <p className="text-sm">$ </p>
        <input
          className="w-full bg-black bg-opacity-0"
          value={currentInput}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleEnter()}
        />
      </div>
    </div>
  );
}
