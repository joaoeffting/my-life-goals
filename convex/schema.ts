import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  goals: defineTable({
    text: v.string(),
    column: v.string(),
    completed: v.boolean(),
  })
    .index("by_column", ["column"])
    .index("by_completed", ["completed"]),
});
