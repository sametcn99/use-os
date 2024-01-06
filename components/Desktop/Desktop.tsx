import React from "react";
import Icon from "./Icon";
import Welcome from "../Welcome/Welcome";

export default function Desktop() {
  return (
    <section className="grid h-full w-full grid-cols-12 gap-4 overflow-y-hidden p-4">
      <Icon>
        <div>Computer</div>
      </Icon>
      <Icon>
        <div className="h-[3rem] w-[3rem]">Internet Explorer</div>
      </Icon>
      <Icon>
        <div className="h-[3rem] w-[3rem]">TicTacToe</div>
      </Icon>
      <Icon>
        <div className="h-[3rem] w-[3rem]">Task Manager</div>
      </Icon>
      <Welcome />
    </section>
  );
}
