import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Input, Table, Space } from "antd";
import { useState } from "react";
import Header from "./Header";

const Update = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();
  const { del_id } = useParams();
  console.log(del_id);

  const onFormSubmit = async () => {
    try {
      await axios.put(`http://localhost:3500/users/${del_id}`, {
        name,
      });
      alert("succeess");
    } catch (err) {
      alert(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="bg-todo2 p-10">
      <Header />
      <Form onSubmit={onFormSubmit} className="p-10 shadow-2xl">
        <Form.Item className="text-red-500">
          <Input type="text" onChange={(e) => setName(e.target.value)} placeholder="Type Activity Name here"/>
        </Form.Item>
        <Form.Item>
          <Button className="bg-green-600" type="primary" onClick={onFormSubmit}>Update</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Update;
