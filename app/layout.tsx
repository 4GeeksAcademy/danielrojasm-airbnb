import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Rojas Airbnb",
  description: "Proyecto Next.js 16 con TypeScript y Tailwind CSS",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
