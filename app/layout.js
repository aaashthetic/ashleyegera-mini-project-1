import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white bg-[#F3E2C6] overflow-x-hidden" suppressHydrationWarning={true}>
        <NavBar />
        <main className="pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}