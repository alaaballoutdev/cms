import { Space } from "antd";
import Link from "next/link";
import { PageEntry } from "./PagesTable";

export const renderPreview = (_: any, record: PageEntry) => (
  <Space size="middle">
    <Link href={`/en${record.url}`}>EN</Link>
    <Link href={`/ar${record.url}`}>AR</Link>
  </Space>
);
