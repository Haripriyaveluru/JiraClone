import { z } from "zod";

export const projectSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Project name is required" })
        .max(100, { message: "Project name must be less than 100 characters" }),
    key: z
        .string()
        .min(2, { message: "key is required" })
        .max(10, { message: "key must be less than 10 characters" }),
    description: z
        .string()
        .max(500, { message: "description must be less than 500 characters" })
        .optional(),
});

export const sprintSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Sprint name is required" }),
    startDate: z.date(),
    endDate: z.date(),
});

export const issueSchema = z.object({
    title: z.string().min(1, "Title is required"),
    assigneeId: z.string().cuid("Please select assignee"),
    description: z.string().optional(),
    priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),

})