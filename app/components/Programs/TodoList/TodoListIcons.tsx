"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopIcon from "@/app/components/Desktop/DesktopIcon";
import DockIcon from "@/app/components/Dock/Icon";
import ProgramConfigs from "@/app/Utils/Programs/ProgramConfigs";
import { setTodoListOpen } from "@/lib/redux/slicers/TodoListSlicer";
import TodoListLauncher from "./TodoListLauncher";

export default function ToDoListDesktopIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.todo.value);

  const handleClick = () => {
    if (isOpen === false) {
      dispatch(setTodoListOpen());
    }
  };

  return (
    <>
      <DesktopIcon onClick={handleClick}>
        <span>{ProgramConfigs.TodoList.title}</span>
      </DesktopIcon>
      <TodoListLauncher />
    </>
  );
}
export function ToDoListDockIcon() {
  const isOpen = useSelector((state: RootState) => state.todo.value);
  if (isOpen === false) return <></>;
  return (
    <DockIcon>
      <span>{ProgramConfigs.TodoList.title}</span>
    </DockIcon>
  );
}
