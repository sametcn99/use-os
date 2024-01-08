import TicTacToeDesktopIcon, {
  TicTacToeDockIcon,
} from "@/app/components/Programs/Games/TicTacToe/TicTacToeIcons";
import TicTacToeLauncher from "@/app/components/Programs/Games/TicTacToe/TıcTacToeLauncher";
import SettingsDockIcon, {
  SettingsDesktopIcon,
} from "@/app/components/Programs/Settings/SettingsIcons";
import SettingsLauncher from "@/app/components/Programs/Settings/SettingsLauncher";
import ToDoListDesktopIcon, {
  ToDoListDockIcon,
} from "@/app/components/Programs/TodoList/TodoListIcons";
import TodoListLauncher from "@/app/components/Programs/TodoList/TodoListLauncher";
import Welcome from "@/app/components/Programs/Welcome/Welcome";
import WelcomeDockIcon, {
  WelcomeDesktopIcon,
} from "@/app/components/Programs/Welcome/WelcomeIcons";

const ProgramConfigs = {
  Welcome: {
    title: "Welcome",
    description: "Welcome to the useOS",
    desktopIcon: WelcomeDesktopIcon,
    dockIcon: WelcomeDockIcon,
    launcher: Welcome,
  },
  Settings: {
    title: "Settings",
    description: "Settings Program",
    desktopIcon: SettingsDesktopIcon,
    dockIcon: SettingsDockIcon,
    launcher: SettingsLauncher,
  },
  TicTacToe: {
    title: "TicTacToe",
    description: "Play TicTacToe",
    desktopIcon: TicTacToeDesktopIcon,
    dockIcon: TicTacToeDockIcon,
    launcher: TicTacToeLauncher,
  },
  TodoList: {
    title: "ToDo List",
    description: "Todo List Program",
    desktopIcon: ToDoListDesktopIcon,
    dockIcon: ToDoListDockIcon,
    launcher: TodoListLauncher,
  },
};
export default ProgramConfigs;
