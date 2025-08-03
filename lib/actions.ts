
"use server"

import {number, z} from "zod";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

const ContactSchema =z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
});

export const saveContact = async(prevState: any, formData : FormData) => { 
    const validatedFields = ContactSchema.safeParse( Object.fromEntries(formData.entries()))
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contact.create({
            data:{
                name : validatedFields.data.name,
                phone : validatedFields.data.phone,
            }
        })
    } catch (error) {
        return {message : "Failed to create contact"};
    }

    revalidatePath("/contacts");
    redirect("/contacts");
 };