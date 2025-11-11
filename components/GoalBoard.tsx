"use client";

import React, { useState } from "react";

import { COLUMNS } from "@/lib/columns";
import { Goal } from "@/types";
import GoalColumn from "./GoalColumn";
import ThemeToggle from "./ThemeToggle";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const GoalBoard: React.FC = () => {
  const goals = useQuery(api.goals.getGoals);

  const toggleComplete = (id: string) => {
    // TODO: Implement toggle complete
  };

  const deleteGoal = (id: string) => {
    // TODO: Implement delete goal
  };

  if (!goals) return <div>Loading goals ... </div>;

  if (goals.length === 0) return <div>No goals found</div>;

  return (
    <div className="p-4 bg-white dark:bg-black min-h-screen transition-colors">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        🎯 Goal Board
      </h1>
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
