import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  style: ["normal"],
  variable: "--font-montserrat",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  style: ["normal"],
  variable: "--font-montserrat-alt",
});

export const metadata: Metadata = {
  title: "Борисенко Дмитрий | Фуллстек разработчик",
  description: "Портфолио фуллстек разработчика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${montserratAlternates.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
