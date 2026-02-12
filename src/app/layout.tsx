import type { Metadata } from "next";
import { Poppins, Rozha_One } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rozha = Rozha_One({
  variable: "--font-rozha",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chature Bhature | Punjab di Feel, Har Meal",
  description:
    "Authentic North Indian flavors served with nostalgia. Experience the taste of Punjab in every bite at Chature Bhature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${rozha.variable} antialiased font-[family-name:var(--font-poppins)]`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
