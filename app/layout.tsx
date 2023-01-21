import { Montserrat } from "@next/font/google";
import Header from "./(components)/Header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
