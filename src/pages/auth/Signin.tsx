import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { sigin } from "../../hooks/useSignin";

const SSignin = () => {
  const navigate = useNavigate();
  const { mutate } = sigin({ resource: "login" });

  const onFinish = (value: any) =>
    mutate(value, {
      onSuccess: (data) => {
        // 👉 Lưu token
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        alert("Đăng nhập thành công");
        navigate("/todos");
      },
    });

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SSignin;
