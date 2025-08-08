import UpdateForm from '@/components/edit-form'
import React from 'react'

const UpdateContactPage = () => {
  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>
          Update Contact
        </h1>

        <UpdateForm/>
    </div>
  )
}

export default UpdateContactPage