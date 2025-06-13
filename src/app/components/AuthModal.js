// components/AuthModal.js
'use client';

import { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 font-medium ${isLogin ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 font-medium ${!isLogin ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
              >
                Sign Up
              </button>
            </div>
            
            {isLogin ? <LoginForm onSuccess={onClose} /> : <SignupForm onSuccess={onClose} />}
          </div>
        </div>
      </div>
    </div>
  );
}