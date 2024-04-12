import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kingsley Zhong",
  description: "Kingsley Zhong's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container px-8">{children}</main>
      </body>
    </html>
  );
}
