"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface NextUiProvider {
  children: ReactNode;
}

export const NextProvider = ({ children }: NextUiProvider) => {
  return <NextUIProvider className="h-full">{children}</NextUIProvider>;
};
