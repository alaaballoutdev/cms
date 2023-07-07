"use client";
import { useState } from "react";
import Header from "./Header";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("./SideBar"));

const Bars = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const closeNav = () => {
    setOpen(false);
  };

  return (
    <>
      <Header handleToggle={handleToggle} />
      <SideBar closeNav={closeNav} open={open} />
    </>
  );
};

export default Bars;
