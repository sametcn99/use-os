"use client";
import React from "react";
import useSettings from "@/app/hooks/useSettings";

export default function Settings() {
  const { pendingChanges, handleInputChange, saveChanges } = useSettings();
  const handleSaveClick = () => {
    saveChanges();
    alert("Settings saved!");
  };

  const renderInputField = (label: any, value: any, onChange: any) => (
    <div className="flex flex-col text-white">
      <label>{label}</label>
      <input
        type="text"
        className="p-2 text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );

  return (
    <section className="flex h-full w-full flex-col gap-5 px-10 pt-4 text-start">
      <span>write css to inputs</span>
      {renderInputField(
        "Desktop Color",
        pendingChanges.desktopColor,
        (value: any) => handleInputChange("desktopColor", value),
      )}
      {renderInputField("Dock Color", pendingChanges.dockColor, (value: any) =>
        handleInputChange("dockColor", value),
      )}
      {renderInputField("Text Color", pendingChanges.textColor, (value: any) =>
        handleInputChange("textColor", value),
      )}
      {renderInputField(
        "Program Navbar Color",
        pendingChanges.navbarColor,
        (value: any) => handleInputChange("navbarColor", value),
      )}

      <div className="flex flex-row gap-2">
        <button
          className="w-fit items-end rounded-lg bg-purple-900 p-2 text-white hover:bg-purple-800"
          onClick={handleSaveClick}
        >
          SAVE
        </button>
        <button
          className="w-fit items-end rounded-lg bg-purple-900 p-2 text-white hover:bg-purple-800"
          onClick={handleSaveClick}
        >
          DEFAULT
        </button>
      </div>
    </section>
  );
}
