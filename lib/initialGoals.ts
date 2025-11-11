import { Goal } from "@/types";

// --- Dummy Data Setup ---
export const initialGoals: Goal[] = [
  {
    id: "1",
    text: "Finish React component structure",
    column: "day",
    completed: false,
  },
  {
    id: "2",
    text: "Review Tailwind CSS documentation",
    column: "day",
    completed: false,
  },
  {
    id: "3",
    text: "Plan next quarter’s strategy",
    column: "month",
    completed: false,
  },
  {
    id: "4",
    text: "Learn new TypeScript features",
    column: "week",
    completed: false,
  },
  {
    id: "5",
    text: "Update portfolio website (Yearly goal)",
    column: "year",
    completed: false,
  },
  {
    id: "6",
    text: "Read a chapter of a technical book",
    column: "day",
    completed: true,
  },
];
