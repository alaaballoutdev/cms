"use client";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import Loading from "components/Globals/Loading";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return <ConfigProvider>{children}</ConfigProvider>;
  }
  return <Loading height="100vh" />;
};

export default Theme;
