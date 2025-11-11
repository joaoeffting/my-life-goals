import { ColumnId, Goal } from "@/types";
import GoalCard from "./GoalCard";
import NewGoalInput from "./NewGoalInput";

interface GoalColumnProps {
  column: { id: ColumnId; title: string };
  goals: Goal[] | undefined;
}

const GoalColumn = ({ column, goals }: GoalColumnProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow-lg h-full border border-gray-200 dark:border-gray-800 transition-colors">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
        {column.title}
      </h2>

      <div className="min-h-[50px]">
        <NewGoalInput column={column.id} />
        {goals
          ?.filter((goal) => goal.column === column.id)
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((goal) => (
            <GoalCard key={goal._id} goal={goal} />
          ))}
      </div>
    </div>
  );
};

export default GoalColumn;
