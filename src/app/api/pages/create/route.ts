import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";
import { pocketRequest } from "utils/pocketRequestWrapper";

type RequestBody = {
  pagename: string;
  content: string;
  url: string;
  content_ar: string;
};

const createPage = async (data: RequestBody) => {
  const res = await pocket.collection("pages").create(data);
  return 1;
};

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const { pagename, content, url, content_ar } = body;
  const pocketOperations = async () => {
    return await createPage({ content, url, pagename, content_ar });
  };
  const res: 1 | 0 | -1 = await pocketRequest(pocketOperations);
  if (res === 1) {
    return NextResponse.json({
      message: "Successfuly created",
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
