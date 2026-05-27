import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="layout">
          <div className="content">{children}</div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}