import { CreateButton } from '@/components/buttons'
import ContactTable from '@/components/contact-table'
import Search from '@/components/search'
import React from 'react'
import { getContactsPages } from '@/lib/data'
import Pagination from '@/components/pagination'

const Contacts = async({
  searchParams,
}:{
  searchParams?:{
    query?: string;
    page?: string;
  } 
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactsPages(query,currentPage);

  return (
    <div className='max-w-screen-md mx-auto mt-5'>
        <div className="flex items-center justify-between gap-1 mb-5">
           <Search/>
           <CreateButton/>
        </div>
         <ContactTable query={query} currentPage = {currentPage} />
         <Pagination totalPages={totalPages}/>
    </div>
  )
}

export default Contacts