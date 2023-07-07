import { AccountBoxOutlined, Home, Pages } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

const NavList = () => {
  const Navigations = [
    { text: "Home", icon: <Home />, href: "/" },
    { text: "Users", icon: <AccountBoxOutlined />, href: "/users" },
    { text: "Pages", icon: <Pages />, href: "/pages" },
  ];

  return (
    <List>
      {Navigations.map((nav) => (
        <Link href={nav.href} key={nav.href}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
export default NavList;
