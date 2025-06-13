"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Modal from "./Modal";
import Login from "./Login";
import SignupPage from "./Signup";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-purple-700">
                CoinCoach
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/course" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Courses
              </Link>
              <Link href="/games" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Games
              </Link>
              <Link href="/whycoincoach" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Why CoinCoach?
              </Link>
              
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow hover:shadow-lg transition"
              >
                Login
              </button>
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
