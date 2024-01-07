"use client";
import { RootState } from "@/lib/redux/store";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicTacToe from "./TicTacToe";
import { setTıcTacToeOpen } from "@/lib/redux/slicers/TicTacToeSlicer";

export default function Welcome() {
  console.log("Render TicTacToe component");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [size, setSize] = useState("w-[30rem] h-[30rem]");
  const [isFull, setIsFull] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector((state: RootState) => state.ticTacToeIsOpen);
  const dispatch = useDispatch();

  const handleMouseDown = () => {
    if (isFull === false) {
      setIsDragging(true);
    }
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
          `TicTacToe component is dragging: newX: ${newX} | newY: ${newY}`,
        );
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const fullSwitch = () => {
    if (isFull === false) {
      setIsFull(true);
      setSize("w-full h-full");
      console.log("set welcome component to full screen");
    } else {
      setIsFull(false);
      setSize("w-[30rem] h-[30rem]");
      console.log("set welcome component to window screen");
    }
  };

  const setClose = () => {
    dispatch(setTıcTacToeOpen());
  };

  if (!isOpen.value) return <></>;

  return (
    <section
      className="absolute -z-10 flex h-full w-full items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`${size} relative bg-slate-400`}
        style={
          isFull
            ? { top: 0, left: 0 }
            : { transform: `translate(${position.x}px, ${position.y}px)` }
        }
        ref={containerRef}
      >
        <nav
          className="sticky top-0 flex h-[2rem] w-full justify-between bg-slate-500"
          onMouseDown={handleMouseDown}
        >
          <div>TicTacToe</div>
          <div className="flex gap-2 font-bold">
            <button className="w-5 hover:bg-slate-300" onClick={fullSwitch}>
              []
            </button>
            <button className="w-5 hover:bg-slate-300" onClick={setClose}>
              X
            </button>
          </div>
        </nav>
        <div className="flex h-full flex-col items-center justify-center bg-purple-500 text-center">
          <TicTacToe />
        </div>
      </div>
    </section>
  );
}
