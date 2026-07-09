import Navbar from "./Component/Navbar";
import "./globals.css";
import Footer from "./Component/Footer";
import ChatWidget from "./Component/ChatWidget";

export const metadata = {
  title: "First Choice Afro Villa Limited - Premium Land Investments in Nigeria",
  description: "First Choice Afro Villa Limited — discover verified, titled land across Nigeria's most promising locations. Flexible payment plans, guaranteed documentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}