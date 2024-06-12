import React from "react";
import { useAuth } from "./Auth/AuthProvider";
import AddTransaction from "./Transactions/AddTransaction";
import TransactionList from "./Transactions/TransactionList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      console.error("Failed to log out");
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
        <p className="text-center text-gray-700 mb-4">
          Welcome, {currentUser.email}
        </p>
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Log Out
          </button>
        </div>
        <div className="mb-8">
          <TransactionList />
        </div>
        <div>
          <AddTransaction />
        </div>
      </div>
    </div>
  );
}
