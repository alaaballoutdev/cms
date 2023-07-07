"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

function SignOut({}) {
  useEffect(() => {
    signOut();
  }, []);

  return <></>;
}

export default SignOut;
