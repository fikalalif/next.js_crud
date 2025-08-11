"use client"

import Link from "next/link";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
import { usePathname,useSearchParams } from "next/navigation";
import clsx from "clsx";
import { number } from "zod";

const Pagination = ({totalPages} : {totalPages : number}) => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageURL = (pageNumber : string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page",pageNumber.toString());
        return `${pathName}?${params.toString()}`;
    }

    const allPages = generatePagination(currentPage,totalPages);

    const PaginationNumber = ({
        page,
        href,
        position,
        isActive
    }:{
        page : number |string;
        href : string;
        position?: "first" | "last" | "middle" | "single";
        isActive : boolean;
    }) => {

        const className = clsx("flex h-10 w-10 items-center justify-center text-sm border",
            {
                "rounded-1-sm": position === "first" || position === "single",
                "rounded-r-sm": position === "last"  || position === "single",
                "z-10 bg-blue-100 border-blue-500 text-white" : isActive,
                "hover:bg-gray-100" : !isActive && position !== "middle",
                "text-gray-300 pointer-events-none": position === "middle"
            }
        );

        return isActive && position === "middle" ? (
            <div className={className}>{page}</div>
        ):(
            <Link href={href} className={className}>{page}</Link>
        )

    }

    const PaginationArrow = ({
        href,
        direction,
        isDisable,
    }:{
        href : string,
        direction : "left" | "right";
        isDisable : boolean
    }) =>{

        const className = clsx("flex h-10 w-10 items-center justify-center text-sm border",
            {
                "pointer-events-none text-gray-300" : isDisable,
                "hover:bg-gray-100": !isDisable,
                "mr-2": direction === "left",
                "ml-2": direction === "right"
            }
        );
        const icon = direction === "left"?(
            <HiChevronLeft size={20}/>
        ):(
            <HiChevronRight size={20}/>
        );

        return isDisable?(
            <div className={className}>{icon}</div>
        ):(
            <Link href={href} className={className}>{icon}</Link>
        );
    }

  return (
    <div>Pagination</div>
  )
}

export default Pagination