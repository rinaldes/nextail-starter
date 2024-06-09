import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Nextail App",
  description: "Starter project for Next.js",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
