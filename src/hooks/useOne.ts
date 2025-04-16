

// import { useQuery } from "@tanstack/react-query"
// import { getOne } from "../provider/dataProvider"

import { useQuery } from "@tanstack/react-query"
import { getOne } from "../provider/dataProvider"


// export const useOne=({resource, id}:any)=>{
//     return useQuery({
//         queryKey:[resource, id],
//         queryFn:async()=>{
//             return getOne({resource, id})
//         }
//     })
// }
export const useOne=({resource, id}:any)=>{
    return useQuery({
        queryKey:[resource, id],
        queryFn:async()=>{
            return getOne({resource, id})
        }
    })
}