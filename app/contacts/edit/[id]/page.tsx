import UpdateForm from '@/components/edit-form'
import React from 'react'
import { getContactsbyId } from '@/lib/data'
import { notFound } from 'next/navigation'
import type { AppPageProps } from '../../../../global' // path ke global.d.ts

const UpdateContactPage = async ({ params }: AppPageProps<{ id: string }>) => {
  const id = params.id;
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
