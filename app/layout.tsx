import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Company Agency",
  description:
    "Company Agency, this is a company agency website portfolio, which provides factory services to customers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body className={poppins.className}>{children}</body>
      </Providers>
    </html>
  );
}
