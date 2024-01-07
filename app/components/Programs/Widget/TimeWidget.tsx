"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { updateTime } from "@/lib/redux/slicers/WidgetSlicer";

export default function TimeWidget() {
  // Initialize Redux dispatch hook
  const dispatch = useDispatch();

  // Retrieve timestamp from Redux state using the useSelector hook
  const timestamp = useSelector((state: RootState) => state.time.timestamp);

  // Create a Date object based on the retrieved timestamp
  const time = new Date(timestamp);

  // Set up an effect to update the timestamp at regular intervals
  useEffect(() => {
    // Check if the code is running in a browser environment
    if (typeof window !== "undefined") {
      // Set up an interval to dispatch a Redux action to update the timestamp
      const intervalId = setInterval(() => {
        const newTime = new Date();
        dispatch(updateTime(newTime.getTime()));
      });

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [dispatch]);
  return (
    <section className="absolute right-5 -z-50 w-[25rem] rounded-lg p-2 text-2xl font-semibold text-white">
      <span>{time.toUTCString()}</span>
    </section>
  );
}
