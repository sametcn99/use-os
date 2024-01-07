"use client";
import useSettings from "@/app/hooks/useSettings";
import React, { useState, useRef } from "react";

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
  const { pendingChanges } = useSettings();
  const [position, setPosition] = useState({
    x: 700,
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
        const newX = e.clientX - containerRect.left;
        const newY = e.clientY - containerRect.top;
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
      className="absolute "
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`${size} rounded-lg bg-slate-400`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ref={containerRef}
      >
        <nav
          className={`sticky top-0 flex h-[2rem] w-full flex-row items-center justify-between rounded-t-lg border pl-2 text-white ${pendingChanges.navbarColor}`}
          onMouseDown={handleMouseDown}
        >
          <div>{name}</div>
          <div className="flex gap-2 font-bold">
            <button className="w-5 hover:bg-slate-600" onClick={setClose}>
              X
            </button>
          </div>
        </nav>
        <div className="flex h-full flex-col items-center justify-center rounded-b-lg border bg-purple-950 text-center">
          {children}
        </div>
      </div>
    </section>
  );
}
