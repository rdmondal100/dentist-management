import { z } from "zod";



export const registerUserSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50, { message: "Name can not be more than 50 charecters" }),
    email: z.string().email().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    password: z.string().min(8, { message: "Password be at least 8 charecters" }).max(16, { message: "Password can not be more than 16 charecter" })

});

export const loginUserSchema = z.object({
    email: z.string().email().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    password: z.string().min(8, { message: "Password be at least 8 charecters" }).max(16, { message: "Password can not be more than 16 charecter" })

});