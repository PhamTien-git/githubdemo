// import { useMutation } from "@tanstack/react-query"
// import { SignupOne } from "../provider/authProvider"

import { useMutation } from "@tanstack/react-query"
import { Signup } from "../provider/authProvider"

// export const useSignup=({resource}:any)=>{
//     return useMutation({
//         mutationFn:(variables)=>{
//             return SignupOne({resource, variables})
//         },
//         onSuccess:()=>console.log("succes")
//     })
// }
export const signup=({resource}:any)=>{
    return useMutation({
        mutationFn:(variables)=>{
            return  Signup({resource, variables})
        }
    })
}