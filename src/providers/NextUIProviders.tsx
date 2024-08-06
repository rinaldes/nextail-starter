"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/system";

import { ChildType } from "@/shares/types";

export const Providers = ({ children }: ChildType) => <NextUIProvider>{children}</NextUIProvider>;
