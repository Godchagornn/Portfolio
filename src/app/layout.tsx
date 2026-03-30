import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
// import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godchagorn Kitima - Portfolio",
  description: "Welcome to the portfolio of Godchagorn Kitima, a passionate and dedicated software developer. With a strong background in web development and a keen eye for design, Godchagorn has created a diverse range of projects that showcase his skills and creativity. Explore his work and discover how he can contribute to your next project.",
  icons: {
    icon: [], 
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        {/* <Header /> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
