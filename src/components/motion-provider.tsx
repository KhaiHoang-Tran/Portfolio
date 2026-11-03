"use client";

import type { ReactNode } from "react";
import { AnimateUIProvider } from "@animate-ui/react/provider";

export function MotionProvider({ children }: { children: ReactNode }) {
  return <AnimateUIProvider tempo={1.15}>{children}</AnimateUIProvider>;
}
