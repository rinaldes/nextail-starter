import type { Metadata } from "next";

import { Providers } from "@/providers/NextUIProviders";
import { ChildType } from "@/shares/types";
import { inter } from "@/shares/assets/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Repo Starter",
  description: "Start Project",
};

const RootLayout = ({ children }: ChildType) => (
  <html className="dark" lang="en">
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
