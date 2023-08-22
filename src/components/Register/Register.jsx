import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Form, Input, Button } from 'antd';
import '../Register/Register.css';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/register', values);
      console.log('Registration successful:', response.data);

      if (response.data) {
        navigate('/'); // Redirect to the specified path
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="register-form-container">
      <Form
        name="register-form"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid email!',
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
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
