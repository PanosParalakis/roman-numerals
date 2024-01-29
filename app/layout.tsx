import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roman Numeral Converter",
  description:
    "a JavaScript function exercise that converts a number into a Roman Numeral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-end">
          <Image
            src="roman-numerals.jpg"
            alt="Roman Numerals Photo"
            quality={100}
            width={450}
            height={264}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
