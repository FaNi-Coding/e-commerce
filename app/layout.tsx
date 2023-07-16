import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { ReduxProvider } from "@/redux/provider";
import { Manrope } from "next/font/google";

import "./globals.css";
import Cart from "@/components/Pages/Cart/Cart";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description:
    "E-commerce is a ongoing development project site built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={manrope.className}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Cart />
        </body>
      </ReduxProvider>
    </html>
  );
}
