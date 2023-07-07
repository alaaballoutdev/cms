"use client";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { signOut } from "next-auth/react";

const Header = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2, textAlign: "center" }}
          >
            Post In
          </Typography>

          <Button
            color="inherit"
            onClick={() => signOut({ callbackUrl: "/api/auth/logout" })}
          >
            Signout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
