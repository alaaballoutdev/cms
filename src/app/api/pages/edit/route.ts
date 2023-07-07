import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";
import { pocketRequest } from "utils/AuthValidation";

type RequestBody = {
  pagename: string;
  content: string;
  url: string;
  id: string;
  content_ar: string;
};

const editPage = async (
  id: string,
  { content, url, pagename, content_ar }: RequestBody
) => {
  const res = await pocket
    .collection("pages")
    .update(id, { content, url, pagename, content_ar });
  if (!res.code) {
    return 1;
  }
  return -1;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { pagename, content, url, id, content_ar } = body;
  const pocketOperations = async () => {
    return await editPage(id, { content, url, id, pagename, content_ar });
  };
  const res: 1 | 0 | -1 = await pocketRequest(pocketOperations);
  if (res === 1) {
    return NextResponse.json({
      message: "Successfuly updated",
    });
  }
  if (res === 0) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
  if (res === -1) {
    return NextResponse.json(
      {
        message: "Something went Wrong",
      },
      { status: 400 }
    );
  }
}
