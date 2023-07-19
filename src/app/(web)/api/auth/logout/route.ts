import { Database } from "lib/Models/Database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const pocket = Database.getConnection();
  pocket.authStore.clear();
  return NextResponse.redirect(new URL("/", request.url));
}
