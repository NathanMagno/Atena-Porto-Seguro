import type { Metadata } from "next";
import "./styles/globals.css";
import { minhaFonte} from "@/app/font/fonts"

export const metadata: Metadata = {
  title: "Porto Seguro API",
  description: "Projeto final da porto seguro",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="pt-br">
      <body className={`${minhaFonte.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}