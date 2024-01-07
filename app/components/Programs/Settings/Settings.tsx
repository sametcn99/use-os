"use client";
import useSettings from "@/app/hooks/useSettings";
import React from "react";

export default function Settings() {
  const { pendingChanges, handleInputChange, saveChanges } = useSettings();

  const handleSaveClick = () => {
    saveChanges(); // Save the pending changes when the "SAVE" button is clicked.
    alert("Settings saved!");
  };

  return (
    <section className="flex h-full w-full flex-col gap-5 p-10 text-start">
      <div className="flex flex-col text-white">
        <label>Desktop Color</label>
        <input
          type="text"
          className="text-black"
          value={pendingChanges.desktopColor}
          onChange={(e) => handleInputChange("desktopColor", e.target.value)}
        />
      </div>
      <div className="flex flex-col text-white">
        <label>Dock Color</label>
        <input
          type="text"
          className="text-black"
          value={pendingChanges.dockColor}
          onChange={(e) => handleInputChange("dockColor", e.target.value)}
        />
      </div>
      <div className="flex flex-col text-white">
        <label>Text Color</label>
        <input
          type="text"
          className="text-black"
          value={pendingChanges.textColor}
          onChange={(e) => handleInputChange("textColor", e.target.value)}
        />
      </div>
      <div className="flex flex-col text-white">
        <label>Program Navbar Color</label>
        <input
          type="text"
          className="text-black"
          value={pendingChanges.navbarColor}
          onChange={(e) => handleInputChange("navbarColor", e.target.value)}
        />
      </div>
      <button
        className="w-fit items-end rounded-lg bg-purple-900 p-2 text-white hover:bg-purple-800"
        onClick={handleSaveClick}
      >
        SAVE
      </button>
    </section>
  );
}
