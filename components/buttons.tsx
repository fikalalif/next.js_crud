import Link from "next/link"
import {IoAddSharp} from "react-icons/io5"

export const CreateButton = () =>{
    return(
        <Link href="/contacts/create" className="inline-flex items-center space-x-1 text-white bg-blue-500
         hover:bg-blue-900 px-5 py-[9px] rounded-sm text-sm">
            <IoAddSharp size={20}/>
            Create
         </Link>
    )
}