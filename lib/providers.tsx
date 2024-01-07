"use client";
import reduxStore from "@/lib/redux/store";
import React from "react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
