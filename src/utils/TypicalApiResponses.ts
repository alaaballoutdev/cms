import { NextResponse } from "next/server";

export function BadRequest() {
  return NextResponse.json(
    {
      message: "Bad Request",
    },
    { status: 400 }
  );
}

export function Unauthorized() {
  return NextResponse.json(
    {
      message: "Unauthorized",
    },
    { status: 401 }
  );
}
export function Success() {
  return NextResponse.json({
    message: "Success",
  });
}
export function InvalidCredentials() {
  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
