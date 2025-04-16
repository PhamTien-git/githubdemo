

// // import { Button, Form, Input, InputNumber, Select, Switch } from "antd";
// // import { useCreate } from "../../hooks/useCreate";

// import { Button, Form, Input, Select, Switch } from "antd";
// import { useCreate } from "../../hooks/useCreate";
// import { useSignup } from "../../hooks/useSignup";




// const Signup=()=>{
//   const {mutate}=useSignup({resource:"register"})
//   const onFinish=(values:any)=>mutate(values,{
//     onSuccess:()=>{
//       alert("Đăng nhập thanh cong")
//     }
//   })
//      return (
//         <Form onFinish={onFinish} layout="vertical">
//           <Form.Item name="email" label="Email" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
//   <Input.Password />
// </Form.Item>
    
         
    
      
    
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Lưu
//             </Button>
//           </Form.Item>
//         </Form>
//       );
// }
// export default Signup






import { Button, Form, Input, Select, Switch } from "antd";
import { useCreate } from "../../hooks/useCreate";
import { useNavigate } from "react-router-dom";



const Ssignup=()=>{

    const navigate=useNavigate();
    const{mutate}=useCreate({resource:"users"})
    const onFinish=(value:any)=>mutate(value,{
        onSuccess:()=>{
            alert("Đăng kí thành công"),
            navigate("/signin")
        }
    })
         return (
        <Form onFinish={onFinish}  layout="vertical">
          <Form.Item name="email" label="Tiêu đề" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
    
          <Form.Item name="password" label="Mô tả" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
    
         
    
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      );
}
export default Ssignup
