import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../Auth/AuthProvider";

export default function AddTransaction() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "transactions"), {
        description,
        amount: parseFloat(amount),
        category,
        createdAt: serverTimestamp(),
        userId: currentUser.uid,
      });
      setDescription("");
      setAmount("");
      setCategory("");
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Add Transaction
      </button>
    </form>
  );
}
