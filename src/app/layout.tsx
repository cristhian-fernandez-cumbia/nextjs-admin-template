import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Providers from "@/redux/providers";

const nunito = Inter({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['100', '300', '400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Template App",
  description: "Template Dashboard App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
