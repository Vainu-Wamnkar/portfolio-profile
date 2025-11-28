import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate();

  const fetchQueries = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await axios.get(
        "https://portfolio-backend-a4on.onrender.com/api/contact/all"
      );

      setQueries(response.data.data);
      console.log(response.data)
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // DELETE QUERY FUNCTION
  const deleteQuery = async (id) => {
    const yes = window.confirm("Are you sure you want to delete this message?");
    if (!yes) return;

    try {
      await axios.delete(`https://portfolio-backend-a4on.onrender.com/api/contact/delete/${id}`);
      fetchQueries(); // refresh list
    } catch (err) {
      console.log("Error deleting query:", err);
      alert("Error deleting item");
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {queries.length > 0 ? (
              queries.map((q, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td className="p-3">{q.name}</td>
                  <td className="p-3">{q.email}</td>
                  <td className="p-3">{q.message}</td>
                  <td className="p-3">
                    {new Date(q.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteQuery(q._id)}
                      className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No Queries Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
