import { Avatar, Drawer, IconButton } from "@mui/material";
import NavList from "./NavList";
import { ChevronLeft } from "@mui/icons-material";
import { useEffect, useState } from "react";

type NavDrawerProps = {
  open: boolean;
  closeNav: () => void;
};

const NavDrawer = ({ open, closeNav }: NavDrawerProps) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await fetch("http://localhost:3000/api/user/userinfo");
      const resObject = await res.json();
      if (res.status === 200) {
        setEmail(resObject.userInfo.email);
      }
    };

    fetchUserInfo();
  });

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
      }}
    >
      <IconButton onClick={closeNav} sx={{ width: 50 }}>
        <ChevronLeft />
      </IconButton>
      <div className="flex items-center">
        <Avatar sx={{ m: 1 }} />
        <p style={{ fontSize: 14 }}> {email}</p>
      </div>
      <NavList />
    </Drawer>
  );
};

export default NavDrawer;
