import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DND Music Band - Rock Your World",
  description: "Welcome to DND Music Band - A vibrant rock band bringing energy and passion to every performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

