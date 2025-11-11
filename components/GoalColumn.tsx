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
  );
};

export default GoalColumn;
