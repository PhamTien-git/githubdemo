



// import { data } from "react-router-dom"
// import { instance } from "./instance"

import { any } from "joi";
import { instance } from "./instance";


// const dataProvider={
//   getList:async({resource}:any)=>{
//     const response=await instance.get(`/${resource}`)
//     return response.data
//   },
//   getOne:async({resource, id}:any)=>{
//     const response=await instance.get(`/${resource}/${id}`)
//     return {
//      data: response.data
//     }
//   },
//   CreateOne:async({resource, variables}:any)=>{
//     const response=await instance.post(`/${resource}`, variables)
//     return response.data
//   },
//   UpdateOne:async({resource,id, variables}:any)=>{
//     const response=await instance.put(`/${resource}/${id}`, variables)
//     return {
//       data:response.data
//     }
//   },
//   DeleteOne:async({resource, id}:any)=>{
//    await instance.delete(`/${resource}/${id}`)
//     return {
//       sucess:true
//     }
//   }
// }
// export const {getList, DeleteOne, CreateOne, getOne,UpdateOne}=dataProvider

const dataProvider={
    getList:async({resource}:any)=>{
        const response=await instance.get(`/${resource}`)
        return response.data
    },
    getOne:async({resource, id}:any)=>{
        const response=await instance.get(`/${resource}/${id}`)
        return {
            data:response.data
        }
    },
    CreateOne:async({resource, variables}:any)=>{
        const response=await instance.post(`/${resource}`, variables)
        return response.data
    },
    UpdateOne:async({resource,id, variables}:any)=>{
        const response=await instance.put(`/${resource}/${id}`, variables)
        return {
            data:response.data
        }
    },
    DeleteOne:async({resource, id}:any)=>{
       await instance.delete(`/${resource}/${id}`)
        return {
            succes:true
        }
    }
}
export const{getList, DeleteOne, CreateOne, getOne, UpdateOne}=dataProvider