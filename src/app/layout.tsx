import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import NoteProvider from "@/providers/NoteProvider";

export const metadata: Metadata = {
  title: "AI Notes App",
  description: "An AI-powered notes application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoteProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <main className=" flex flex-1 flex-col px-4 pt-6 xl:px-8">
                  {children}
                </main>
              </div>
              <Toaster />
            </SidebarProvider>
          </NoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
