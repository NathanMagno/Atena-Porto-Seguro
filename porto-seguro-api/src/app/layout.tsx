import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porto Seguro API",
  description: "Projeto final da porto seguro",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}