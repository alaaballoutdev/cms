"use client";
import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";
import { renderPreview } from "./ItemsRenders";
import {
  LinkOutlined,
  CalendarOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loadingPages, pageItems } from "lib/recoil-atoms";
import { Page } from "lib/Models/Types";
import dynamic from "next/dynamic";
const DeletePageModal = dynamic(() => import("./DeletePageModal"));
const Paragraph = dynamic(() => import("antd/es/typography/Paragraph"));

export interface PageEntry extends Page {
  key: string;
}

const PagesTable = () => {
  const [open, setOpenModal] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const tableLoading = useRecoilValue(loadingPages);
  const pages = useRecoilValue<PageEntry[]>(pageItems);
  const router = useRouter();

  const handleClick = (record: PageEntry) => {
    setOpenModal(true);
    setSelectedPage(record.key);
  };

  const renderActions = (_: any, record: PageEntry) => (
    <Space size="middle">
      <Button onClick={() => router.push(`/editpage?url=${record.url}`)}>
        <EditOutlined />
      </Button>
      <Button onClick={() => handleClick(record)}>
        <DeleteOutlined />
      </Button>
    </Space>
  );

  const columns: ColumnsType<PageEntry> = [
    {
      title: (
        <>
          <LinkOutlined /> URL
        </>
      ),
      key: "url",
      dataIndex: "url",
      fixed: "left",
      width: "80px",
    },
    {
      title: (
        <>
          <EditOutlined /> Page Name
        </>
      ),
      key: "pagename",
      dataIndex: "pagename",
    },
    {
      title: (
        <>
          <CalendarOutlined /> Created
        </>
      ),
      key: "created",
      dataIndex: "created",
    },
    {
      title: (
        <>
          <EyeOutlined /> Preview
        </>
      ),
      key: "preview",
      render: renderPreview,
    },
    {
      title: "Actions",
      key: "action",
      render: renderActions,
    },
    {
      title: (
        <Button type="primary" onClick={() => router.push("/createpage")}>
          Create
        </Button>
      ),
      key: "create",
    },
  ];

  return (
    <>
      <DeletePageModal
        setOpenModal={setOpenModal}
        open={open}
        title="Delete Page"
        confirmLoading={loading}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        setLoading={setLoading}
      >
        <Paragraph>Are you sure?</Paragraph>
      </DeletePageModal>
      <Table
        loading={tableLoading}
        dataSource={pages}
        columns={columns}
        size="middle"
        scroll={{ x: 1000 }}
      />
    </>
  );
};

export default PagesTable;
