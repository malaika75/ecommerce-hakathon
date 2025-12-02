"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md p-8 rounded-lg w-96"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h1>
        <input
          type="password"
          placeholder="Enter Admin Password"
          className="border p-3 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          className="bg-black text-white py-2 rounded w-full hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
