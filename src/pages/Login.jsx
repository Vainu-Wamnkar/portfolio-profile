import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://portfolio-backend-a4on.onrender.com/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", response.data.token);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-96 shadow-xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Admin Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full p-3 bg-gray-700 text-white rounded"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
