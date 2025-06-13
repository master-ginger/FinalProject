"use client";
import { useState,useRef,useEffect } from "react";
import Link from "next/link";
import { Menu, X ,UserCircle,LogOut,User} from "lucide-react";
import Modal from "./Modal";
import Login from "./Login";
import SignupPage from "./Signup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import LoginPage from "./Login";
import Image from "next/image";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user, logout } = useAuth();
  const router=useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center">
              <Image src="/logo.png" alt="Your Logo"
            width={40} // Desired display width
            height={40} // Desired display height
            className="h-8 w-auto"></Image>
              <Link href="/" className="text-2xl font-bold text-purple-700">
                CoinCoach
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/course" className="mt-2 text-gray-700 hover:text-purple-600 transition font-medium">
                Courses
              </Link>
              <Link href="/games" className="mt-2 text-gray-700 hover:text-purple-600 transition font-medium">
                Games
              </Link>
              <Link href="/whycoincoach" className="mt-2 text-gray-700 hover:text-purple-600 transition font-medium">
                Resources
              </Link>
              
              {/* <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow hover:shadow-lg transition"
              >
                Sign Up
              </button> */}
           {user ? (
  <div className="relative" ref={menuRef}>
    <div
      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow hover:shadow-lg cursor-pointer"
      title={user.name}
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <UserCircle className="text-white w-6 h-6" />
    </div>

    {showMenu && (
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-[100]">
        <button
          className="flex items-center gap-2 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
          onClick={() => {
            setShowMenu(false);
            router.push("/profile");
          }}
        >
          <User size={16} /> Profile
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
          onClick={() => {
            setShowMenu(false);
            logout(); // from AuthContext
          }}
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    )}
  </div>
) : (
  <button
    onClick={() => setShowLogin(true)}
    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow hover:shadow-lg transition"
  >
    Login
  </button>
)}

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-purple-700 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3">
            <a href="#modules" className="block text-gray-700 hover:text-purple-600 font-medium">
              Modules
            </a>
            <a href="#why" className="block text-gray-700 hover:text-purple-600 font-medium">
              Why CoinCoach?
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-purple-600 font-medium">
              Contact
            </a>
            <button
              onClick={() => {
                setShowLogin(true);
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center px-4 py-2 rounded-full font-medium shadow hover:shadow-lg"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Modal with Login */}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
       <SignupPage/>
      </Modal>
    </>
  );
}
