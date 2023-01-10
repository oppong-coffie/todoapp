import React, { useEffect } from "react";
import Header from "../components/Header";
import { Form, Button, Input, Table, Space } from "antd";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import todopic from "../images/todo.jpg";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const Todolist = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const Column = Table;
  const [name, setName] = useState();
  const [data, setData] = useState([]);
  const onFormSubmit = async () => {
    try {
      await axios.post("http://localhost:3500/users", {
        name,
      });
      alert("succeess");
    } catch (err) {
      alert(err);
    } finally {
      navigate("/");
    }
  };
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3500/users");
      setData(res.data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="bg-gray-200 p-3">
      {/* <img className="background-display: screen" src={todopic} alt="" /> */}
      <div className="">
        <Header />
      </div>
      <div className="bg-todo p-9">
        <Form onSubmit={onFormSubmit} className="flex">
          <Form.Item className="text-red-500 flex-initial w-80">
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button className="primary bg-blue-900 text-white font-bold" onClick={onFormSubmit}>Add</Button>
          </Form.Item>
        </Form>
      </div>

      <div className="p-3">
        <Table className="bg-blue-300" dataSource={data}>
          <Column title="" dataIndex={""} />
          <Column title="Activity" dataIndex={"name"} className="bg-gray-200" />
          <Column
            title="Action"
            dataIndex="id"
            key="action"
            render={(id) => (
              <Space size="small">
                <Link to={`/update/${id}`}>
                  <Button className="bg-green-800" type="primary">
                    <EditOutlined />
                  </Button>
                </Link>
                <Link to={`/delete/${id}`}>
                  <Button className="font-bold" danger>del <DeleteOutlined className="font-bold"/> </Button>
                </Link>
              </Space>
            )}
            className="bg-gray-100"
          />
        </Table>
      </div>
    </div>
  );
};

export default Todolist;
