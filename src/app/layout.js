
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nischal's Portfolio",
  description: "Web developer portfolio of Nischal Shrestha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* Sidebar + Page */}
        <div className="flex flex-1">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Page Content */}
          <main className="flex-1 p-8">
            {children}
          </main>

        </div>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
