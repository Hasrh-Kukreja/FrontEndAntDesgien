import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login/login.css";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
  
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/login", {
        Email: values.username.toLowerCase(),
        Password: values.password,
      });
      setLoading(false);
       console.log("checking values", )
      if (response.data.token) {
        window.location.href = "/dashboad";
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <Form
            className="form"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox className="Remember-checkbox">Remember me</Checkbox>
            </Form.Item>
            <Button
              className="submit-button"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Submit
            </Button>
            <p className="resgister">
              Not a user? <a href="/Register">Register Here</a>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
