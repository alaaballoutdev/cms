"use client";
import { Button } from "antd";
import { signOut } from "next-auth/react";
import React from "react";
const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
