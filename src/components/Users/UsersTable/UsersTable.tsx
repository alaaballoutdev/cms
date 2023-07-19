"use client";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  UserOutlined,
  MailOutlined,
  CalendarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { renderEmail } from "./ItemsRenders";
import { useState } from "react";
import { User } from "lib/Models/Types";
import dynamic from "next/dynamic";
const DeleteUserModal = dynamic(() => import("./DeleteUserModal"));
const Paragraph = dynamic(() => import("antd/es/typography/Paragraph"));
type Props = {
  users: UserEntry[];
};
export type UserEntry = User & { key: string; created: string };

const UsersTable = ({ users }: Props) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userItems, setUsers] = useState(users);
  const handleClick = (id: string) => {
    setOpenModal(true);
    setSelectedUser(id);
  };

  const columns: ColumnsType<UserEntry> = [
    {
      title: (
        <>
          <UserOutlined /> Username
        </>
      ),
      dataIndex: "username",
      key: "username",
      fixed: "left",
      width: "100px",
    },
    {
      title: (
        <>
          <MailOutlined /> Email
        </>
      ),
      dataIndex: "email",
      key: "created",
      render: renderEmail,
    },
    {
      title: (
        <>
          <CalendarOutlined /> Joined
        </>
      ),
      dataIndex: "created",
      key: "created",
    },

    {
      title: "Actions",
      key: "action",
      render: (_: any, record: UserEntry) => (
        <Space size="middle">
          <Button type="default" onClick={() => handleClick(record.key)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <DeleteUserModal
        setOpenModal={setOpenModal}
        open={openModal}
        title="Delete User"
        confirmLoading={loading}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        setLoading={setLoading}
        setUsers={setUsers}
        userItems={userItems}
      >
        <Paragraph>Are you sure?</Paragraph>
      </DeleteUserModal>
      <Table
        columns={columns}
        scroll={{ x: 1000 }}
        dataSource={userItems}
        size="middle"
      />
    </>
  );
};

export default UsersTable;
