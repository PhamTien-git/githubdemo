



import { Button, Form, Input, Select, Switch } from "antd";
import { useCreate } from "../../hooks/useCreate";
import { useNavigate } from "react-router-dom";



const ProductAddPage=()=>{
    const navigate=useNavigate();
    const{mutate}=useCreate({resource:"todos"})
    const onFinish=(value:any)=>mutate(value,{
        onSuccess:()=>{
            alert("Thêm thành công"),
            navigate("/todos")
        }
    })
         return (
        <Form onFinish={onFinish}  layout="vertical">
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
export default ProductAddPage
