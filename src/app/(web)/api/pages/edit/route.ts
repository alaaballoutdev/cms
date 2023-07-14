import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";
import { validateAuthentication } from "utils/AuthValidation";

type RequestBody = {
  pagename: string;
  content: string;
  url: string;
  id: string;
  content_ar: string;
};

export async function POST(request: Request) {
  const isValid = await validateAuthentication();
  if (!isValid) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
  const body: RequestBody = await request.json();
  const { pagename, content, url, id, content_ar } = body;

  try {
    await pocket
      .collection("pages")
      .update(id, { content, url, pagename, content_ar });
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Successfuly updated",
  });
}
