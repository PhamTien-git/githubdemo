

// import { useQuery } from "@tanstack/react-query";
// import { any } from "joi";
// import { getList } from "../provider/dataProvider";

import { useQuery } from "@tanstack/react-query";
import { any } from "joi";
import { getList } from "../provider/dataProvider";





// export const useList=({resource}:any)=>{
//     return useQuery({
//         queryKey:[resource],
//         queryFn:async()=>{
//             return getList({resource})
//         }
//     })
// }
export const useList=({resource}:any)=>{
    return useQuery({
        queryKey:[resource],
        queryFn:async()=>{
            return getList({resource})
        }
    })
}
