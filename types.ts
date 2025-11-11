export type ColumnId = "day" | "week" | "month" | "year";

export interface Goal {
  id: string;
  text: string;
  column: ColumnId;
  completed: boolean;
}
