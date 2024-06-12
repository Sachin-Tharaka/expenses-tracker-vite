import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "../Auth/AuthProvider";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", currentUser.uid)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const transactionsData = [];
      snapshot.forEach((doc) =>
        transactionsData.push({ ...doc.data(), id: doc.id })
      );
      setTransactions(transactionsData);
    });

    console.log("transactions", transactions);

    return () => unsubscribe();
  }, [currentUser.uid]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Transaction List
      </h3>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
          >
            <strong className="text-gray-700">{transaction.description}</strong>
            :{" "}
            <span className="text-green-600 font-medium">
              ${transaction.amount}
            </span>{" "}
            <span className="text-gray-500">({transaction.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
