import { Goal } from "@/types";

interface GoalCardProps {
  goal: Goal;
  // Placeholder actions (you would implement these later)
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const GoalCard: React.FC<GoalCardProps> = ({
  goal,
  onToggleComplete,
  onDelete,
}) => (
  <div
    className={`p-3 mb-3 border rounded-lg shadow-sm cursor-grab transition-all 
                    ${
                      goal.completed
                        ? "bg-green-100 border-green-300 line-through text-gray-500"
                        : "bg-white border-gray-200 hover:shadow-md"
                    }`}
  >
    <p className="font-medium text-sm">{goal.text}</p>

    <div className="mt-2 flex space-x-2 text-xs">
      <button
        onClick={() => onToggleComplete(goal.id)}
        className={`px-2 py-1 rounded transition-colors 
                      ${
                        goal.completed
                          ? "bg-gray-400 text-white hover:bg-gray-500"
                          : "bg-indigo-500 text-white hover:bg-indigo-600"
                      }`}
      >
        {goal.completed ? "Un-Complete" : "Complete"}
      </button>
      <button
        onClick={() => onDelete(goal.id)}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
      {/* Placeholder for Drag/Move/Reorder - Actual drag logic is complex */}
      <span className="self-center text-gray-400">| Drag Icon</span>
    </div>
  </div>
);

export default GoalCard;
