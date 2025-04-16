








// import { useDelete } from "../../hooks/useDelete"
// import { useList } from "../../hooks/useList"

import { useNavigate } from "react-router-dom"
import { useDelete } from "../../hooks/useDelete"
import { useList } from "../../hooks/useList"


// const ProductListPage=()=>{
//   const{data:todos, isLoading, error}=useList({resource:"todos"})
//   const{mutate}=useDelete({resource:"todos"})
//   if(isLoading)return <div>...Loading</div>
//   if(error)return <div>Error:{error?.reponse.data}</div>
//   return(
//     <div>
// <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     {todos.map((item:any)=>(
//  <tr key={item.id}>
//  <th scope="row">{item.title}</th>
//  <td>{item.description}</td>
//  <td>{item.priority}</td>
//  <td>{item.status? "Hoan thanh":"Chua hoan thanh"}</td>
//  <td>
//   <button onClick={()=>   window.confirm("m chac k") && mutate(item.id)} className="btn btn-primary">Xoa</button>
//  </td>
// </tr>
//     ))}
   
//   </tbody>
// </table>

//     </div>
//   )
// }
// export default ProductListPage
const ProductListPage=()=>{
  const navigate=useNavigate();
    const {data:todos, isLoading, error}=useList({resource:"todos"})
    const {mutate}=useDelete({resource:"todos"})
    if(isLoading) return <div>...isLoading</div>
    if(error as any) return <div>Error:{error?.response.data}</div>
    return(
<div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {todos.map((item:any)=>(
 <tr key={item.id}>
 <th scope="row">{item.title}</th>
 <td>{item.description}</td>
 <td>{item.priority}</td>
 <td>{item.status ? "Hoan thanh": "Chua hoan thanh"}</td>
 <td>
  <button onClick={()=>window.confirm("M chắc k")&& mutate(item.id)} className="btn btn-danger">Xoa</button>
  <button onClick={()=>navigate(`/todos/edit/${item.id}`)}  className="btn btn-primary">Sua</button>
 </td>
</tr>
  ))}
   
  </tbody>
</table>

</div>
    )
}
export default ProductListPage