import { ColumnId, Goal } from "@/types";
import GoalCard from "./GoalCard";

interface GoalColumnProps {
  column: { id: ColumnId; title: string };
  goals: Goal[];
  toggleComplete: (id: string) => void;
  deleteGoal: (id: string) => void;
}

const GoalColumn = ({
  column,
  goals,
  toggleComplete,
  deleteGoal,
}: GoalColumnProps) => {
  return (
    <div
      key={column.id}
      className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow-lg h-full border border-gray-200 dark:border-gray-800 transition-colors"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
        {column.title}
      </h2>

      <div className="min-h-[50px]">
        {goals
          .filter((goal) => goal.column === column.id)
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onToggleComplete={toggleComplete}
              onDelete={deleteGoal}
            />
          ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors">
        + Add New Goal
      </button>
    </div>
  );
};

export default GoalColumn;
