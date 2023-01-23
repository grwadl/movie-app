import { Montserrat } from "@next/font/google";
import Footer from "../components/logic/footer/Footer";
import Header from "../components/logic/header/Header";
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
      <body className="h-screen flex flex-col">
        <Header className="w-full top-0 left-0 fixed" />
        <main className="main flex-1 basis-full mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
