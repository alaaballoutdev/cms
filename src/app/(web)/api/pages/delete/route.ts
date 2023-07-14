import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";
import { validateAuthentication } from "utils/AuthValidation";

type RequestBody = {
  id: string;
};

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const isValid = await validateAuthentication();
  if (!isValid) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
  try {
    await pocket.collection("pages").delete(body.id);
    return NextResponse.json({
      message: "Success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Bad Request",
      },
      { status: 400 }
    );
  }
}
