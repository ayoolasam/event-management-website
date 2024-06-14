import { Link } from "react-router-dom";
import Welcome from "./common/Welcome";
import { Input, Button, Form } from "antd";

const Register = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:flex hidden">
        <Welcome />
      </div>
      <div className=" h-screen items-center flex justify-center">
        <Form className="flex flex-col gap-8  font-bold" layout="vertical">
          <h1 className="text-gray-600 font-bold text-2xl">
            Register our Account
          </h1>
          <Form.Item
            name="name"
            required
            label="Name"
            rules={[{ required: true, message: "Please input your Name" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            required
            rules={[{ required: true, message: "Please input your Password" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            required
            rules={[{ required: true, message: "Please input your Password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary">Register</Button>
          <Link to="/login">
            <h2 className="text-gray-600 font-bold text-xl">
              Already have an account? Log In
            </h2>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;