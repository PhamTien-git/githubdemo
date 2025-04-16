

// import { useMutation } from "@tanstack/react-query";
// import { any } from "joi";
// import { DeleteOne } from "../provider/dataProvider";

import { useMutation } from "@tanstack/react-query";
import { any } from "joi";
import { DeleteOne } from "../provider/dataProvider";


// export const useDelete=({resource}:any)=>{
//     return useMutation({
//         mutationFn:(id)=>{
//             return DeleteOne({resource, id})
//         },
//         onSuccess:()=>console.log("succes")
//     })
// }
export const useDelete=({resource}:any)=>{
    return useMutation({
        mutationFn:(id)=>{
            return  DeleteOne({resource, id})
        }
    })
}


