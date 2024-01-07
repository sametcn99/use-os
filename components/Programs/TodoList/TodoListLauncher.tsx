"use client";
import { setTodoListOpen } from "@/lib/redux/slicers/TodoListSlicer";
import ProgramLauncher from "@/Utils/Programs/ProgramLauncher";
import ProgramConfigs from "@/Utils/Programs/ProgramConfigs";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

function TodoListLauncher() {
  const isOpen = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <ProgramLauncher
      name={ProgramConfigs.TodoList.title}
      dispatch={dispatch}
      slice={setTodoListOpen}
      size="w-[40rem] h-[40rem]"
      isOpen={isOpen}
    >
      <TodoList />
    </ProgramLauncher>
  );
}

export default TodoListLauncher;
