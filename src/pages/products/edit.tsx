

// import { Button, Form, Input, Select, Switch } from "antd";
// import { useCreate } from "../../hooks/useCreate";
// import { useParams } from "react-router-dom";
// import { useOne } from "../../hooks/useOne";
// import { useUpdate } from "../../hooks/useUpdate";

import { Button, Form, Input, Select, Switch } from "antd";
import { useCreate } from "../../hooks/useCreate";
import { useParams } from "react-router-dom";
import { useOne } from "../../hooks/useOne";
import { useUpdate } from "../../hooks/useUpdate";




// const ProductEditPage=()=>{
//   const{id}=useParams();
//    const{data, isLoading, error}=useOne({resource:"todos", id:Number(id)})
//   const {mutate}=useUpdate({resource:"todos" ,id:Number(id)})
//   const onFinish=(values:any)=>mutate(values,{
//     onSuccess:()=>{
//       alert("Them thanh cong")
//     }
//   })
//   if(isLoading)return <div>...Loading</div>
//   if(error)return <div>Error:{error?.reponse.data}</div>
//      return (
//         <Form onFinish={onFinish} initialValues={data?.data} layout="vertical">
//           <Form.Item name="title" label="Tiêu đề" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
    
//           <Form.Item name="description" label="Mô tả" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
    
//           <Form.Item name="priority" label="Ưu tiên" rules={[{ required: true }]}>
//             <Select>
//               <Select.Option value="low">Thấp</Select.Option>
//               <Select.Option value="medium">Trung bình</Select.Option>
//               <Select.Option value="high">Cao</Select.Option>
//             </Select>
//           </Form.Item>
    
//           <Form.Item
//             name="status"
//             label="Trạng thái"
//             valuePropName="checked"
//             initialValue={false}
//           >
//             <Switch checkedChildren="Hoàn thành" unCheckedChildren="Chưa hoàn thành" />
//           </Form.Item>
    
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Lưu
//             </Button>
//           </Form.Item>
//         </Form>
//       );
// }
// export default ProductEditPage
const ProductEditPage=()=>{
    const{id}=useParams();
      const {data, isLoading, error}=useOne({resource:"todos", id:Number(id)})

    const{mutate}=useUpdate({resource:"todos", id:Number(id)})
    const onFinish=(value:any)=>mutate(value,{
        onSuccess:()=>{
            alert("Thêm thành công")
        }
    })
    if(isLoading) return <div>...isLoading</div>
    if(error as any) return <div>Error:{error?.response.data}</div>
         return (
        <Form onFinish={onFinish} initialValues={data?.data}  layout="vertical">
          <Form.Item name="title" label="Tiêu đề" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
    
          <Form.Item name="description" label="Mô tả" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
    
          <Form.Item name="priority" label="Ưu tiên" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="low">Thấp</Select.Option>
              <Select.Option value="medium">Trung bình</Select.Option>
              <Select.Option value="high">Cao</Select.Option>
            </Select>
          </Form.Item>
    
          <Form.Item
            name="status"
            label="Trạng thái"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch checkedChildren="Hoàn thành" unCheckedChildren="Chưa hoàn thành" />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      );
}
export default ProductEditPage
