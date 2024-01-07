import React from "react";
import WelcomeDesktopIcon from "../Welcome/WelcomeDesktopIcon";
import TicTacToeDesktopIcon from "../Games/TicTacToe/TicTacToeIcons";

export default function Desktop() {
  return (
    <section className="grid h-full w-full grid-cols-12 gap-4 overflow-y-hidden p-4">
      <WelcomeDesktopIcon />
      <TicTacToeDesktopIcon />
    </section>
  );
}
