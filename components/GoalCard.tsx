import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Goal } from "@/types";
import { useMutation } from "convex/react";

interface GoalCardProps {
  goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  const deleteGoal = useMutation(api.goals.deleteGoal);

  const onDeleteGoal = async () => {
    console.log("Deleting goal", goal);
    await deleteGoal({ id: goal._id });
  };

  return (
    <div
      className={`p-3 mb-3 border rounded-lg shadow-sm cursor-grab transition-all 
                    ${
                      goal.completed
                        ? "bg-green-100 dark:bg-green-950 border-green-300 dark:border-green-800 line-through text-gray-500 dark:text-gray-400"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md"
                    }`}
    >
      <p className="font-medium text-sm text-gray-900 dark:text-white">
        {goal.text}
      </p>

      <div className="mt-2 flex space-x-2 text-xs">
        <button
          onClick={() => {}}
          className={`px-2 py-1 rounded transition-colors 
                      ${
                        goal.completed
                          ? "bg-gray-400 dark:bg-gray-600 text-white hover:bg-gray-500 dark:hover:bg-gray-700"
                          : "bg-indigo-500 dark:bg-indigo-600 text-white hover:bg-indigo-600 dark:hover:bg-indigo-700"
                      }`}
        >
          {goal.completed ? "Un-Complete" : "Complete"}
        </button>
        <button
          onClick={onDeleteGoal}
          className="px-2 py-1 bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 dark:hover:bg-red-700"
        >
          Delete
        </button>
        <span className="self-center text-gray-400 dark:text-gray-500">
          | Drag Icon
        </span>
      </div>
    </div>
  );
};

export default GoalCard;
