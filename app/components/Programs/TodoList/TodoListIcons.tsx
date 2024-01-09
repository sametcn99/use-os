"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopIcon from "@/app/components/Desktop/DesktopIcon";
import ProgramConfigs from "@/app/utils/programs/ProgramConfigs";
import { setTodoListOpen } from "@/lib/redux/slicers/TodoListSlicer";

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
    </>
  );
}
