"use client"

import { saveContact } from "@/lib/actions";
// import { useFormState } from "react-dom";
import { useActionState } from "react";

const CreateForm = () => {
    const [state, formAction] = useActionState(saveContact,null);
  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
                >
                    full name
                </label>
                <input 
                type="text" 
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="full name.."
                />
                <div id="name-error" aria-live="polite" aria-atomic = "true" >
                    <p className="mt-2 text-sm text-red-500"> {state?.Error?.name}</p>
                </div>
            </div>

            <div className="mb-5">
                <label 
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
                >
                    full name
                </label>
                <input 
                type="text" 
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="phone number.."
                />
                <div id="phone-error" aria-live="polite" aria-atomic = "true" >
                    <p className="mt-2 text-sm text-red-500"> {state?.Error?.phone}</p>
                </div>
            </div>

            <div id="message-error" aria-live="polite" aria-atomic = "true" >
                <p className="mt-2 text-sm text-red-500"> {state?.message}</p>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium
            rounded-sm text-sm w-full px-5 py-3 text-center">
            save
            </button>
        </form>
    </div>
  )
}

export default CreateForm;