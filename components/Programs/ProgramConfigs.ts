import TicTacToeDesktopIcon, {
  TicTacToeDockIcon,
} from "../Games/TicTacToe/TicTacToeIcons";
import WelcomeDockIcon, { WelcomeDesktopIcon } from "../Welcome/WelcomeIcons";

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
};
export default ProgramConfigs;
