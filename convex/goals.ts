import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getGoals = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("goals").order("desc").collect();
  },
});

export const createGoal = mutation({
  args: { text: v.string(), column: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("goals", {
      text: args.text,
      column: args.column,
      completed: false,
    });
  },
});

export const deleteGoal = mutation({
  args: { id: v.id("goals") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
