import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
const BreadCrumb = () => {
  const navigationMap = new Map([
    ["/", [{ title: "Dashboard", key: "Dashboard", href: "/" }]],
    ["/users", [{ title: "Users", key: "Users", href: "/" }]],
    ["/pages", [{ title: "Pages", key: "Pages", href: "/pages" }]],
    [
      "/createpage",
      [
        { title: "Pages", key: "Pages", href: "/pages" },
        { title: "Create Page", key: "Create Page", href: "/createpage" },
      ],
    ],
    [
      "/editpage",
      [
        { title: "Pages", key: "Pages", href: "/pages" },
        { title: "Edit Page", key: "Edit Page", href: "/editpage" },
      ],
    ],
  ]);

  const pathanme = usePathname();

  const BreadItems = navigationMap.get(pathanme);

  return <Breadcrumb style={{ margin: "16px 0" }} items={BreadItems} />;
};

export default BreadCrumb;
