"use client";
import React from "react";
import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
