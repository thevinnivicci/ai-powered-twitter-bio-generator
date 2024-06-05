import React from 'react'
import { z } from "zod"

const formSchema = z.object({
    model: z.string().min(1, "Model is required"),
    temperature: z.number().min(0, "Temperature must be atleat 0").max(2, "Temperature must be at most 2"),
    content: z.string().min(50, "Content must be atleat 50").max(500, "Content should not exceed 500 character limit"),
    type: z.enum(["personal", "brand"], {
        errorMap: ()=> ({message:"Type is required"})
    }),
    tone: z.enum(["professional", "casual", "sarcastic", "funny", "passionate", "thoughtfull"], {
        errorMap: ()=> ({message:"Tone is required"})
    }),
    emojis: z.boolean()
  })

export const UserInput = () => {
  return (
    <div>UserInput</div>
  )
}
