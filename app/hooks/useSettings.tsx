// Importing necessary React hooks
import { useState, useEffect } from "react";

interface Settings {
  desktopColor: string;
  dockColor: string;
  textColor: string;
  navbarColor: string;
}

const useSettings = () => {
  const [storedSettings, setStoredSettings] = useState<Settings>(() => {
    let storedSettings: Settings = {
      desktopColor:
        "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,0,0,1) 100%)",
      dockColor: "default-dock-color",
      textColor: "white",
      navbarColor: "#404142",
    };

    try {
      const storedSettingsFromLocalStorage = JSON.parse(
        typeof window !== "undefined"
          ? window.localStorage.getItem("settings") || "{}"
          : "{}",
      );

      storedSettings = {
        ...storedSettings,
        ...storedSettingsFromLocalStorage,
      };
    } catch (error) {
      console.error("Error parsing settings from localStorage");
    }

    return storedSettings;
  });

  const [pendingChanges, setPendingChanges] =
    useState<Settings>(storedSettings);

  useEffect(() => {
    try {
      localStorage.setItem("settings", JSON.stringify(storedSettings));
    } catch (error) {
      console.error("Error storing settings in localStorage:", error);
    }
  }, [storedSettings]);

  const handleInputChange = (key: keyof Settings, value: string) => {
    setPendingChanges((prevChanges) => ({
      ...prevChanges,
      [key]: value,
    }));
  };

  const saveChanges = () => {
    setStoredSettings(pendingChanges);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return { pendingChanges, handleInputChange, saveChanges };
};

export default useSettings;
