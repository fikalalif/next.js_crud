"use client"

import Link from "next/link"
import {IoAddSharp, IoPencil, IoTrashOutline} from "react-icons/io5"
import { useFormStatus } from "react-dom"
import { clsx } from "clsx"

export const CreateButton = () =>{
    return(
        <Link href="/contacts/create" className="inline-flex items-center space-x-1 text-white bg-blue-500
         hover:bg-blue-900 px-5 py-[9px] rounded-sm text-sm">
            <IoAddSharp size={20}/>
            Create
         </Link>
    )
}

export const EditButton = () =>{
    return(
        <Link href="/contacts/create" className="rounded-sm border p-1 hover:bg-gray-300">
            <IoPencil size={20}/>
            
        </Link>
    )
}

export const DeleteButton = () =>{
    return(
        <Link href="/contacts/create" className="rounded-sm border p-1 hover:bg-gray-300">
            <IoTrashOutline size={20}/>
            
         </Link>
    )
}

export const SubmitButton = ({label } : {label : string}) => { 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {pending} = useFormStatus();
    const classname = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    {
        "opacity-50 cursor-progress" : pending
    }
    ); 
    return(
        <button type="submit" className={classname}
            disabled={pending}>
            {label === "Save" ? (
                <span>{pending? "Saving ..." : "Save"}</span>
            ) : (
                <span>{pending? "Updating ..." : "Update"}</span>
            )}
        </button>
    )
 };