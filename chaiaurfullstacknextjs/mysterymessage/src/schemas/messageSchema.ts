import { z } from "zod";

export const messageSchema=z.object({
    content:z
    .string()
    .min(10,{message:"content must be more than 10 chars"})
    .max(300,{message:"content must not be more than 300 chars"})

})