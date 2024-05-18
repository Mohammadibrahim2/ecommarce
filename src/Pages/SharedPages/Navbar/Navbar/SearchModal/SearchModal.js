
import React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import { Button,  Form, Input } from 'antd';

const SearchModal= ({handelSearch,setValues,values}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
     
      <BsSearch  type="primary" className='text-2xl text-orange-500 lg:hidden block' onClick={showModal}/>
   
      <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       okButtonProps={{
        disabled: true,
      }}
      cancelButtonProps={{
        disabled: true,
      }}>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
   
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'search',
        },
      ]}
    >
      <Input />
    </Form.Item>

    

   
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" 
      style={{color:"orange"}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
           
      </Modal>
    </div>
  );
};
export default SearchModal;
//