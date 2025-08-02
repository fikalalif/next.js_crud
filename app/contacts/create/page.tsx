import React from 'react'
import CreateForm from '../../../components/create-form';

const CreateContactPage = () => {
  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>
            add new contact
            <CreateForm/>
        </h1>
    </div>
  )
}

export default CreateContactPage