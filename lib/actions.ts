
"use server"

import {number, z} from "zod";
import { prisma } from "@/lib/prisma";
import { error } from "console";

const ContactSchema =z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
})

export const saveContact = async(formData : FormData) => { 
    const validatedFields = ContactSchema.safeParse( Object.fromEntries(formData.entries()))
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    
 };