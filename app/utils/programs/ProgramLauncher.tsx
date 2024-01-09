"use client";
import { Settings } from "@/types/types";
import React, { useState, useRef, useEffect } from "react";

export default function ProgramLauncher({
  children,
  name,
  isOpen,
  dispatch,
  slice,
  size,
}: {
  children: any;
  name: string;
  isOpen: any;
  dispatch: any;
  slice: any;
  size: string;
}) {
  console.log(`Render ${name} component`);
  // State to store settings
  const [settings, setSettings] = useState<Settings | null>(null);

  // useEffect to fetch settings when the component mounts
  useEffect(() => {
    // Retrieving stored settings from local storage
    const storedSettings: Settings | null = JSON.parse(
      window.localStorage.getItem("settings") || "null",
    );
    // Updating state with the fetched settings
    setSettings(storedSettings);
  }, []); // Empty dependency array ensures this effect runs only once
  const [position, setPosition] = useState({
    x: 100,
    y: 200,
  });

  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const newX = e.clientX - containerRect.left - 70;
        const newY = e.clientY - containerRect.top - 30;
        setPosition((prevPosition) => ({
          x: prevPosition.x + newX,
          y: prevPosition.y + newY,
        }));
        console.log(
          `${name} component is dragging: newX: ${position.x} | newY: ${position.y}`,
        );
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const setClose = () => {
    dispatch(slice());
  };

  if (isOpen.value === false) return <></>;

  return (
    <section
      className="absolute h-1 w-1"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`${size} rounded-lg bg-slate-400`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ref={containerRef}
      >
        <nav
          className={`sticky top-0 flex h-[3rem] w-full flex-row items-center justify-between rounded-t-lg border pl-2 text-white`}
          onMouseDown={handleMouseDown}
          style={{ background: settings?.navbarColor }}
        >
          <div>{name}</div>
          <div className="flex h-full gap-2 font-bold">
            <button
              className="h-full w-[3rem] hover:bg-red-800"
              onClick={setClose}
            >
              X
            </button>
          </div>
        </nav>
        <div className="flex h-full flex-col items-center justify-center rounded-b-lg border bg-slate-900 text-center">
          {children}
        </div>
      </div>
    </section>
  );
}
