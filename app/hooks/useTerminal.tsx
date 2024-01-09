import useSettings from "./useSettings";

// Option types for color commands
type Option =
  | "navbarColor"
  | "desktopColor"
  | "textColor"
  | "backgroundImageUrl";

// Available color options
const OPTIONS: Option[] = [
  "navbarColor",
  "desktopColor",
  "textColor",
  "backgroundImageUrl",
];

// // Function to handle color commands
// function handleColorCommand(option: Option, value: string): void {
//   switch (option) {
//     case "navbarColor":
//       console.log(`Navbar Color: ${value}`);
//       // Handle --navbarColor logic here
//       break;

//     case "desktopColor":
//       console.log("Desktop Color command detected");
//       // Handle --desktopColor logic here
//       break;

//     case "textColor":
//       console.log(`Text Color: ${value}`);
//       // Handle --textColor logic here
//       break;

//     case "backgroundUrl":
//       console.log(`Background Url: ${value}`);
//       // Handle --backgroundColor logic here
//       break;

//     // Add more cases for other color options as needed

//     default:
//       console.log(`Invalid input format for ${option}`);
//       break;
//   }
// }

// Main useTerminal function
export default function useTerminal() {
  const { handleInputChange, saveChanges } = useSettings();
  // Function to set and process the command
  const setCommand = (input: string): void => {
    const colorOptionRegex = new RegExp(`--(${OPTIONS.join("|")})=(\\S+)`);
    const match = colorOptionRegex.exec(input);
    if (match) {
      const option: Option = match[1] as Option;
      const value: string = match[2];
      switch (option) {
        case "navbarColor":
          console.log(`Navbar Color: ${value}`);
          handleInputChange("navbarColor", value);
          // Handle --navbarColor logic here
          break;

        case "desktopColor":
          console.log("Desktop Color command detected");
          handleInputChange("desktopColor", value);
          saveChanges();
          // Handle --desktopColor logic here
          break;

        case "textColor":
          console.log(`Text Color: ${value}`);
          handleInputChange("textColor", value);
          // Handle --textColor logic here
          break;

        case "backgroundImageUrl":
          console.log(`Background Url: ${value}`);
          handleInputChange("backgroundImageUrl", value);
          // Handle --backgroundColor logic here
          break;

        // Add more cases for other color options as needed
        default:
          console.log(`Invalid input format for ${option}`);
          break;
      }
    } else {
      console.log("Invalid input");
    }

    console.log(`Input: ${input}`);
  };

  // Return the setCommand function
  return { setCommand };
}
