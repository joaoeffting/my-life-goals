"use client";

import React, { useState } from "react";

import { initialGoals } from "@/lib/initialGoals";
import { COLUMNS } from "@/lib/columns";
import { Goal } from "@/types";
import GoalColumn from "./GoalColumn";

const GoalBoard: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
        {COLUMNS.map((column) => (
          <GoalColumn
            key={column.id}
            column={column}
            goals={goals}
            toggleComplete={toggleComplete}
            deleteGoal={deleteGoal}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalBoard;
