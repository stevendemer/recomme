"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-react-query";

export function Providers({ children, ...props }: ThemeProviderProps) {
  const client = getQueryClient();

  return (
    <QueryClientProvider client={client}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>;
    </QueryClientProvider>
  );
}
