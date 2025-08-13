import { CreateButton } from '@/components/buttons'
import ContactTable from '@/components/contact-table'
import Search from '@/components/search'
import React, { Suspense } from 'react'
import { getContactsPages } from '@/lib/data'
import Pagination from '@/components/pagination'
import { TableSkeleton } from '@/components/skeleton'

type ContactsProps = {
  query: string;
  currentPage: number;
  showActions?: boolean; // kontrol tombol CRUD
};

const Contacts = async ({ query, currentPage, showActions = true }: ContactsProps) => {
  const totalPages = await getContactsPages(query, currentPage);

  return (
    <div className='max-w-screen-md mx-auto mt-5'>
      {showActions && ( // cuma tampil kalau showActions = true
        <div className="flex items-center justify-between gap-1 mb-5">
          <Search />
          <CreateButton />
        </div>
      )}

      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Contacts;
