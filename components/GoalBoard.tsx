"use client";

import React, { useState } from "react";

import GoalCard from "./GoalCard";
import { initialGoals } from "@/lib/initialGoals";
import { COLUMNS } from "@/lib/columns";
import { Goal } from "@/types";
// --- Main Component ---

const GoalBoard: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  // Implement state management for actions (placeholder)
  const toggleComplete = (id: string) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🎯 Goal Board</h1>

      {/* Responsive Layout:
        - Desktop (lg+): grid-cols-4
        - Mobile/Tablet: grid-cols-1, auto-flow-row (default)
        - Gap: space-y-4 for mobile, gap-4 for desktop grid
      */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
        {COLUMNS.map((column) => (
          <div
            key={column.id}
            className="bg-gray-100 p-4 rounded-xl shadow-lg h-full"
            // You would add drag-and-drop zone props here
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              {column.title}
            </h2>

            <div className="min-h-[50px]">
              {goals
                .filter((goal) => goal.column === column.id)
                .sort((a, b) => a.text.localeCompare(b.text)) // Example sort
                .map((goal) => (
                  <GoalCard
                    key={goal.id}
                    goal={goal}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteGoal}
                    // You would add draggable props here
                  />
                ))}
            </div>

            {/* Placeholder for adding a new goal */}
            <button className="w-full mt-4 py-2 text-sm text-center text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
              + Add New Goal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalBoard;
