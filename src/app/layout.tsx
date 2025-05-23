import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ANY PRODUCTION - Culturally Relevant Stories",
  description: "Any Production Ltd. is an independent production company focused on growing a thriving, self-sustaining and universal creative ecosystem that specialises in telling culturally relevant & entertaining stories.",
  keywords: "Any Production, Korty EO, Flow with Korty, Love or Lies, Nigerian production, documentary, reality shows",
  authors: [{ name: "Any Production Ltd." }],
  openGraph: {
    title: "ANY PRODUCTION - Culturally Relevant Stories",
    description: "Independent production company specialising in culturally relevant & entertaining stories",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}