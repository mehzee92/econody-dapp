import type { Metadata } from "next";
import "./globals.css";
import { WalletProvider } from "@/context/WalletContext";
import LayoutWrapper from "@/components/LayoutWrapper";
 // 👈 We'll make this client component

export const metadata: Metadata = {
  title: "Econody",
  description: "Created by Econody team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WalletProvider>
          <LayoutWrapper>
            
            <main style={{minHeight:"calc(100vh - 130px)"}}>{children}</main>
            
            </LayoutWrapper>
        </WalletProvider>
      </body>
    </html>
  );
}
