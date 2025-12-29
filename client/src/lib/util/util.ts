import {type DateArg, format} from "date-fns";

export function formatDate(date: DateArg<Date>){
    return format(date, 'yyyy MM dd H:mm')
}