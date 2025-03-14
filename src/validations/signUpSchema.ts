import {z} from "zod"

const signUpSchema = z.object({
  firstName: z.string().min(1 , {message: "first name is required"}),
  lastName: z.string().min(1, {message: "last name is required"}),
  email: z.string().email(),
  password: z.string().min(8, {message: "the password must be at least 8 characters length"}).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {message: "the password must contains special character"}),
  repeatPassword: z.string().min(1, {message: "repeat password is required"})
}).refine(inputs => inputs.password === inputs.repeatPassword , {message: "repeat password and password does not match", path: ["repeatPassword"]})

type signUpType = z.infer<typeof signUpSchema>;

export {signUpSchema, type signUpType}