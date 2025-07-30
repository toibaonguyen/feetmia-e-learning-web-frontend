import { ThemeProvider } from "@/components/contexts/theme/theme-provider";
import StoreProvider from "@/redux/provider";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feetmia",
  description: "Feetmia - Learn new skills anytime, anywhere. High-quality online courses to inspire your curiosity and growth.",
  keywords: "Feetmia, eLearning, online courses, study online, tech courses, business, design"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning 
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
