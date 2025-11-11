import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { ColumnId } from "@/types";

const NewGoalInput = ({ column }: { column: ColumnId }) => {
  const [text, setText] = useState("");

  const createGoal = useMutation(api.goals.createGoal);

  const onAddGoal = async () => {
    await createGoal({ text, column });
    setText("");
  };
  return (
    <div className="flex w-full mb-4">
      <input
        type="text"
        placeholder="Add a new goal..."
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddGoal();
          }
        }}
      />
      <button
        onClick={onAddGoal}
        className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-r-lg hover:bg-indigo-700 transition duration-150 shadow-md flex items-center justify-center"
      >
        <span className="text-xl leading-none">+</span>
        <span className="hidden sm:inline ml-2">Add</span>
      </button>
    </div>
  );
};

export default NewGoalInput;
