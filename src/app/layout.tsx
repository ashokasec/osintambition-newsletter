import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osint Ambition - Essential Osint Updates Delivered to Your Inbox",
  description: "We are Osint Ambition and we are dedicated to providing high-quality content on Open Source Intelligence (OSINT), offering our readers the latest tips, tricks, and insights in the industry. Over the past year, our newsletter has grown into a trusted source of information, followed by thousands of enthusiasts and professionals alike.",
  authors: [{ name: "Shivam Gupta", url: "https://ashokasec.com" }, { name: "Dheeraj Yadav", url: "https://in.linkedin.com/in/dheerajydv19" }, { name: "Swayam Nayak", url: "https://in.linkedin.com/in/swayamsopnic" }],
  keywords: "osint, open source intelligence, osint ambition, osint newsletter, @ashokasec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`ranbhumi ${inter.className}`}>{children}</body>
    </html>
  );
}
