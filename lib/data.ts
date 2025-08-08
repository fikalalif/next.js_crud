import { prisma } from '@/lib/prisma';

export const getContacts = async () => { 
    try{
        const contacts = await prisma.contact.findMany();
        return contacts;
    } catch (error) {
        throw new Error("failed to fetch contact data");
    }
 };

 export const getContactsbyId = async (id : string) => { 
    try{
        const contact = await prisma.contact.findUnique({
            where:{id},
        });
        return contact;
    } catch (error) {
        throw new Error("failed to fetch contact data");
    }
 };