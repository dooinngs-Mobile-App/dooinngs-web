import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dooinngs | Barbers, Nail Techs, Masons & more",
  description:
    "Dooinngs is a platform that connects you with skilled artisans in your area. Whether you need a carpenter, mason, or a vulcanizer, you can find them here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
