import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";

const inter = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Irkz Portfolio",
  description: "Nice Minimalist portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}> 

         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>

            {children}

          </ThemeProvider>
          
          </body>
    </html>
  );
}
