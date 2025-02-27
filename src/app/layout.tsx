import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppSidebar, Breadcrumb, Navbar } from "@/components/dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppProvider } from "@/context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A comprehensive dashboard application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProvider>
          <SidebarProvider>
            <div className="flex h-screen">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar />
                <Breadcrumb />
                <main className="flex-1 overflow-auto p-4">
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </AppProvider>
      </body>
    </html>
  );
}
