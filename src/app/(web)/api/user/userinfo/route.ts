import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await pocket.admins.authRefresh();
    if (pocket.authStore.isValid) {
      return NextResponse.json(
        {
          userInfo: pocket.authStore.model,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
}
