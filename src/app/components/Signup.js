// app/signup/page.js
'use client';

import { useState } from 'react';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });

  const data = await res.json();

  if (data.success) {
    alert("Signup successful!");
  } else {
    alert(data.error || "Signup failed");
  }
};


  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
  <input
    type="text"
    name="name"
    placeholder="Name"
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

      
    </div>
  );
}
