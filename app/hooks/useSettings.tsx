// Importing necessary React hooks
import { Settings } from "@/types/types";
import { useState, useEffect } from "react";
import { isImageUrlValid } from "../utils/utils";

const useSettings = () => {
  const [storedSettings, setStoredSettings] = useState<Settings>(() => {
    let storedSettings: Settings = {
      desktopColor:
        "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,0,0,1) 100%)",
      dockColor: "#000000",
      textColor: "white",
      navbarColor: "#404142",
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1700164805522-c3f2f8885144?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  const saveChanges = async () => {
    const isValidUrl = await isImageUrlValid(pendingChanges.backgroundImageUrl);
    if (isValidUrl) {
      setStoredSettings(pendingChanges);
      setTimeout(() => {
        alert("Settings saved!");
        window.location.reload();
      }, 1000);
    } else {
      alert("Invalid image URL");
    }
  };
  const setDefault = () => {
    localStorage.removeItem("settings");
    setTimeout(() => {
      alert("Set settings default!");
      window.location.reload();
    }, 1000);
  };

  return { pendingChanges, handleInputChange, saveChanges, setDefault };
};

export default useSettings;
