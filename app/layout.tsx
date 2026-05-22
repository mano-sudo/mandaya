import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import SmoothScroll from "./components/smooth-scroll";
import "./mandaya/mandaya.css";
import "./mandaya/mandaya-premium.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mandaya | People of the Upstream",
  description:
    "An overview of the Mandaya indigenous people of eastern Mindanao: history, society, governance, livelihood, culture, religion, and present-day issues.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%231a1520'/%3E%3Cpath fill='%23c9a227' d='M8 20h48v4H8zm0 10h48v4H8zm0 10h32v4H8z'/%3E%3Cpath fill='%239b1c31' d='M44 40h12v12H44z'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
