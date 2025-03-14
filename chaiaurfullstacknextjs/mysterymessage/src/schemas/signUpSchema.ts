import {z} from 'zod'

export const usernameValidation=z
    .string()
    .min(2,"Username must be atleast 2 chars")
    .max(20,"Username must not be more than 20 chars")
    .regex(/^[a-zA-Z0-9_]+$/,"username must not contain special chars")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:'Paswword must be atleast 6 chars'})
})