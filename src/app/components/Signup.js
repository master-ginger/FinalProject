// app/signup/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const toastId = toast.loading('Logging in...');
    console.log("Form data: ",form)
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });

  const data = await res.json();

  if (data.success) {
    toast.success('Login successful!', { id: toastId });
    router.push('/login')
  } else {
    alert(data.error || "Signup failed");
    toast.error(data.error || 'Invalid credentials', { id: toastId });
  }
};


  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
  <input
    type="text"
    name="firstName"
    placeholder="First Name"
    required
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition duration-200 placeholder-gray-500"
  />
   <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    required
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition duration-200 placeholder-gray-500"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition duration-200 placeholder-gray-500"
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    required
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition duration-200 placeholder-gray-500"
  />
  <button
    type="submit"
    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
  >
    Signup
  </button>
</form>

    <div>Already a user? </div><Link href='/login'>Log in</Link>

      
    </div>
  );
}
