"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const expenses = [
  { id: 1, label: "Rent", category: "Needs" },
  { id: 2, label: "Netflix Subscription", category: "Wants" },
  { id: 3, label: "Groceries", category: "Needs" },
  { id: 4, label: "Eating Out", category: "Wants" },
  { id: 5, label: "Emergency Fund", category: "Savings" },
];

const categories = ["Needs", "Wants", "Savings"];

export default function ExpenseGame() {
  const [droppedItems, setDroppedItems] = useState({ Needs: [], Wants: [], Savings: [] });
  const [completed, setCompleted] = useState(false);

  const handleDrop = (expense, category) => {
    if (expense.category === category && !droppedItems[category].includes(expense.id)) {
      setDroppedItems(prev => ({
        ...prev,
        [category]: [...prev[category], expense.id],
      }));
    }
  };

  const isCorrectlySorted =
    expenses.every(e => droppedItems[e.category]?.includes(e.id)) &&
    Object.values(droppedItems).flat().length === expenses.length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-6 mb-14 text-purple-700">Sort the expenses</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          {expenses.map(expense => {
            const alreadyDropped = Object.values(droppedItems).flat().includes(expense.id);
            return (
              !alreadyDropped && (
                <motion.div
                  key={expense.id}
                  draggable
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onDragStart={e => e.dataTransfer.setData("expense", JSON.stringify(expense))}
                  className="bg-white p-3 rounded-xl shadow hover:shadow-lg cursor-grab border border-purple-200"
                >
                  {expense.label}
                </motion.div>
              )
            );
          })}
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map(category => (
            <div
              key={category}
              onDragOver={e => e.preventDefault()}
              onDrop={e => {
                const dropped = JSON.parse(e.dataTransfer.getData("expense"));
                handleDrop(dropped, category);
              }}
              className="min-h-[200px] p-4 bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-dashed border-purple-400 rounded-xl shadow-inner"
            >
              <h3 className="text-lg font-semibold mb-2 text-purple-700">{category}</h3>
              {droppedItems[category].map(id => {
                const item = expenses.find(e => e.id === id);
                return (
                  <div
                    key={id}
                    className="bg-white px-3 py-2 rounded-lg shadow my-1 text-sm border border-purple-200"
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {isCorrectlySorted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold"
        >
          <CheckCircle className="w-5 h-5" /> You sorted all expenses correctly!
        </motion.div>
      )}

      {!isCorrectlySorted && Object.values(droppedItems).flat().length === expenses.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center justify-center gap-2 text-red-600 font-semibold"
        >
          <XCircle className="w-5 h-5" /> Oops! Some expenses are not sorted correctly.
        </motion.div>
      )}
    </div>
  );
}
