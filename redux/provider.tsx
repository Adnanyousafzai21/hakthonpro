"use client";
import store from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  console.log("provider is adddedd")
  return <Provider store={store}>{children}</Provider>;
}