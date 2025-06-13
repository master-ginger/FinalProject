import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Toaster } from 'react-hot-toast';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar/>

        {children}
         <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />

        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
