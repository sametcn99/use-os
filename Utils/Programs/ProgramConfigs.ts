import TicTacToeDesktopIcon, {
  TicTacToeDockIcon,
} from "@/components/Programs/Games/TicTacToe/TicTacToeIcons";
import ToDoListDesktopIcon, {
  ToDoListDockIcon,
} from "@/components/Programs/TodoList/TodoListIcons";
import WelcomeDockIcon, {
  WelcomeDesktopIcon,
} from "@/components/Programs/Welcome/WelcomeIcons";

const ProgramConfigs = {
  Welcome: {
    title: "Welcome",
    description: "Welcome to the useOS",
    desktopIcon: WelcomeDesktopIcon,
    dockIcon: WelcomeDockIcon,
  },
  TicTacToe: {
    title: "TicTacToe",
    description: "Play TicTacToe",
    desktopIcon: TicTacToeDesktopIcon,
    dockIcon: TicTacToeDockIcon,
  },
  TodoList: {
    title: "ToDo List",
    description: "Todo List Program",
    desktopIcon: ToDoListDesktopIcon,
    dockIcon: ToDoListDockIcon,
  },
};
export default ProgramConfigs;
