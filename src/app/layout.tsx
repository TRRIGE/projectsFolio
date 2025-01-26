import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";

export const metadata: Metadata = {
  title: "Pratik Samarth",
  description: "Project Portfolio",
  icons: [{ url: "/computer.svg", rel: "icon" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
