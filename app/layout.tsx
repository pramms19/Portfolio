import "./globals.css";
import { Poppins, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme_provider";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Prevents layout shift
  variable: "--font-poppins", // Assign a CSS variable
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify desired weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        poppins.className,
        "font-sans scroll-smooth",
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <main>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Toaster richColors />
        </main>
      </body>
    </html>
  );
}
