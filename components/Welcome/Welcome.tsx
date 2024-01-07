"use client";
import { setWelcomeOpen } from "@/lib/redux/slicers/WelcomeSlicer";
import { RootState } from "@/lib/redux/store";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Welcome() {
  console.log("Render Welcome component");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);
  const dispatch = useDispatch();

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
          `Welcome component is dragging: newX: ${newX} | newY: ${newY}`,
        );
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const setClose = () => {
    dispatch(setWelcomeOpen());
  };

  if (!isOpen.value) return <></>;

  return (
    <section
      className="absolute -z-10 flex h-full w-full items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={` relative h-[30rem] w-[30rem] bg-slate-400`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ref={containerRef}
      >
        <nav
          className="sticky top-0 flex h-[2rem] w-full justify-between bg-slate-500"
          onMouseDown={handleMouseDown}
        >
          <div>Welcome!</div>
          <div className="flex gap-2 font-bold">
            <button className="w-5 hover:bg-slate-300" onClick={setClose}>
              X
            </button>
          </div>
        </nav>
        <div className="flex h-full flex-col items-center justify-center bg-purple-500 text-center">
          <span>Welcome to </span>
          <span className="text-5xl font-bold">useOS()</span>
        </div>
      </div>
    </section>
  );
}
