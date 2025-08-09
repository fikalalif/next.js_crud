
"use server"

import { number, z } from "zod";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveContact = async (prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contact.create({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            }
        })
    } catch (error) {
        return { message: "Failed to create contact" }
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateContact = async (id: string, prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contact.update({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            },
            where: { id }
        })
    } catch (error) {
        return { message: "Failed to update contact" }
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

export const deleteContact = async (id: string): Promise<void> => {
    try {
        await prisma.contact.delete({
            where: { id },
        });
    } catch (error) {
        console.error("Failed to delete contact", error);
    }

    revalidatePath("/contacts");
};
