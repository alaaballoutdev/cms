import { Menu } from "antd";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingPages, pageItems } from "lib/recoil-atoms";
import { usePathname } from "next/navigation";
import { NavigationMap } from "./NavigationMap";
import { MenuItem, getItem } from "components/Layout/Bars/MenuItems";
import Link from "next/link";
import {
  PieChartOutlined,
  UserOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { PageRecord, getTableEntry } from "lib/Models/Types";

const MenuBar = () => {
  const pathname = usePathname();
  const [pageMenuItems, setPageMenuItems] = useState<MenuItem[]>([]);
  const [pageEntries, setPages] = useRecoilState(pageItems);
  const setLoadingPages = useSetRecoilState(loadingPages);
  const items = [
    getItem(<Link href="/">Dashboard</Link>, "1", <PieChartOutlined />),
    getItem(<Link href="/users">Users</Link>, "2", <UserOutlined />),
    getItem(<Link href="/pages">Pages Table</Link>, "3", <PaperClipOutlined />),
    getItem("Pages", "sub3", <PaperClipOutlined />, pageMenuItems),
  ];

  useEffect(() => {
    const fetchPages = async () => {
      setLoadingPages(true);
      const res = await fetch("http://localhost:3000/api/pages/getall", {
        next: {
          revalidate: 0,
        },
      });

      if (res.status === 200) {
        const data: { pages: PageRecord[] } = await res.json();
        const pages = data.pages.map((page: PageRecord) => {
          return getTableEntry<PageRecord>(page);
        });
        setPages(pages);
        setLoadingPages(false);
        let addtionalPageItems: MenuItem[] = [];
        for (const element of pageEntries) {
          const enItem: MenuItem = getItem(
            <Link href={`/en${element.url}`}>{element.pagename} (EN)</Link>,
            `/en${element.url}`
          );
          const arItem: MenuItem = getItem(
            <Link href={`/ar${element.url}`}>{element.pagename} (ar)</Link>,
            `/ar${element.url}`
          );
          addtionalPageItems.push(arItem);
          addtionalPageItems.push(enItem);
        }
        setPageMenuItems(addtionalPageItems);
      }
    };

    fetchPages();
  }, [JSON.stringify(pageEntries), setPages, setLoadingPages]);

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[NavigationMap.get(pathname) ?? "0"]}
      mode="inline"
      items={items}
      defaultOpenKeys={["sub3"]}
    />
  );
};

export default MenuBar;
