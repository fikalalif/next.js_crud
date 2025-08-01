import { getContacts } from "@/lib/data";
import React from "react";
import { formatDate } from "@/lib/utils"; 
import { Contact } from '../app/generated/prisma/index';
import { Prisma } from "@prisma/client";
import { DeleteButton, EditButton } from './buttons';

const ContactTable = async () => {
  const contacts = await getContacts();
  return (
    <table className="w-full text-sm texl-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id} className="bg-amber-50 border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{contact.name}</td>
            <td className="py-3 px-6">{contact.phone}</td>
            <td className="py-3 px-6">
              {formatDate(contact.createdAt.toString())}</td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton/>
              <DeleteButton/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
