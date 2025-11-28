import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emiliano Aguero | Security & Engineering",
  description: "Home lab, security engineering, and projects by Emiliano Aguero.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
