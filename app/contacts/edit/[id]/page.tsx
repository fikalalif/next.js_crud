import UpdateForm from '@/components/edit-form'
import React from 'react'
import { getContactsbyId } from '@/lib/data'
import { notFound } from 'next/navigation'

const UpdateContactPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params; // ✅ tunggu Promise
  const contact = await getContactsbyId(id);

  if (!contact) {
    notFound();
  }

  return (
    <div className='max-w-md mx-auto mt-5'>
      <h1 className='text-2xl text-center mb-2'>Update Contact</h1>
      <UpdateForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
