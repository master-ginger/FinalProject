"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful");
      console.log("Logged in user:", data.user);
      // Optional: redirect to dashboard
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="space-y-6 max-w-md mx-auto">
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition duration-200 placeholder-gray-500"
  />

  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition duration-200 placeholder-gray-500"
  />
</div>

<button
  type="submit"
  className="w-full mt-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
>
  Login
</button>
    </form>
  );
}
