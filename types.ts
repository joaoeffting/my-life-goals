import { Id } from "./convex/_generated/dataModel";

export type ColumnId = "day" | "week" | "month" | "year";

export interface Goal {
  _id: Id<"goals">;
  text: string;
  column: ColumnId;
  completed: boolean;
}
