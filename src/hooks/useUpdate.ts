

// import { useMutation } from "@tanstack/react-query"
// import { UpdateOne } from "../provider/dataProvider"

import { useMutation } from "@tanstack/react-query"
import { UpdateOne } from "../provider/dataProvider"



// export const useUpdate=({resource, id}:any)=>{
//     return useMutation({
//         mutationFn:(variables)=>{
//             return UpdateOne({resource,id, variables})
//         },
//         onSuccess:()=>console.log("succes")
//     })
// }

export const useUpdate=({resource, id}:any)=>{
    return useMutation({
        mutationFn:(variables)=>{
            return UpdateOne({resource,id, variables})
        }
    })
}