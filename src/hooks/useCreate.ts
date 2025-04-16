

// import { useMutation } from "@tanstack/react-query"
// import { CreateOne } from "../provider/dataProvider"

import { useMutation } from "@tanstack/react-query"
import { CreateOne } from "../provider/dataProvider"






// export const useCreate=({resource}:any)=>{
//     return useMutation({
//         mutationFn:(variables)=>{
//             return CreateOne({resource, variables})
//         },
//         onSuccess:()=>console.log("succes")
//     })
// }
export const useCreate=({resource}:any)=>{
    return useMutation({
        mutationFn:(variables)=>{
            return  CreateOne({resource, variables})
        }
    })
}