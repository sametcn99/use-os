import TicTacToeDesktopIcon from "@/app/components/Programs/Games/TicTacToe/TicTacToeIcons";
import TicTacToeLauncher from "@/app/components/Programs/Games/TicTacToe/TıcTacToeLauncher";
import { SettingsDesktopIcon } from "@/app/components/Programs/Settings/SettingsIcons";
import SettingsLauncher from "@/app/components/Programs/Settings/SettingsLauncher";
import ToDoListDesktopIcon from "@/app/components/Programs/TodoList/TodoListIcons";
import TodoListLauncher from "@/app/components/Programs/TodoList/TodoListLauncher";
import Welcome from "@/app/components/Programs/Welcome/Welcome";
import { WelcomeDesktopIcon } from "@/app/components/Programs/Welcome/WelcomeIcons";

const ProgramConfigs = {
  Welcome: {
    title: "Welcome",
    description: "Welcome to the useOS",
    desktopIcon: WelcomeDesktopIcon,
    launcher: Welcome,
  },
  Settings: {
    title: "Settings",
    description: "Settings Program",
    desktopIcon: SettingsDesktopIcon,
    launcher: SettingsLauncher,
  },
  TicTacToe: {
    title: "TicTacToe",
    description: "Play TicTacToe",
    desktopIcon: TicTacToeDesktopIcon,
    launcher: TicTacToeLauncher,
  },
  TodoList: {
    title: "ToDo List",
    description: "Todo List Program",
    desktopIcon: ToDoListDesktopIcon,
    launcher: TodoListLauncher,
  },
};
export default ProgramConfigs;
