


// // import { instance } from "./instance";

import { instance } from "./instance"

// import { data } from "react-router-dom"
// import { instance } from "./instance"


// const dataProvider={
 
//   SignupOne:async({resource, variables}:any)=>{
//     const response=await instance.post(`/${resource}`, variables)
//     return response.data
//   },
  
// }
// export const { SignupOne}=dataProvider

const dataProvider={
   
  
    Signup:async({resource, variables}:any)=>{
        const response=await instance.post(`/${resource}`, variables)
        return response.data
    },
    Sigin:async({resource, variables}:any)=>{
        const response=await instance.post(`/${resource}`, variables)
        return response.data
    },
   
}
export const{Signup, Sigin}=dataProvider