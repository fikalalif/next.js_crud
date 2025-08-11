import { array } from "zod";

export const formatDate = (dateStr : string) => {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle : "medium",
        timeStyle : "short",
    });
    return formatter.format(date)
}

export const generatePagination = (currentPages : number, totalPages : number) => { 
    if(totalPages <= 7){
        return Array.from({length: totalPages}, (_,i) => i+1);
    }

    if(currentPages <= 3){
        return [1,2,3,"...",totalPages - 2, totalPages -1, totalPages]
    }

    if(currentPages >= totalPages -2){
        return [1,2,3,"...", totalPages - 2, totalPages - 1, totalPages]
    }

    return[
        1,
        "...",
        currentPages - 1,
        currentPages,
        currentPages + 1,
        "...",
        totalPages
    ]
 };