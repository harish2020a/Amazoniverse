import "./globals.css";
import { Inter } from "next/font/google";
import ProvidersWrapper from "./ProvidersWrapper";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazoniverse",
  description:
    "Our Amazon Clone is a comprehensive e-commerce platform that replicates the core functionalities and features of the immensely popular online marketplace, Amazon. Designed to provide a seamless shopping experience, our clone platform combines user-friendly interfaces, robust infrastructure, and a wide range of products to cater to the needs of modern-day shoppers.",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWrapper>
          <Header />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
