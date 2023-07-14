import { PageFormData } from "components/Pages/PageForm";
import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";
import { validateAuthentication } from "utils/AuthValidation";

type RequestBody = {
  pagename: string;
  content: string;
  url: string;
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
  const { pagename, content, url, content_ar } = body;
  const data = { pagename, content, url, content_ar };
  try {
    const res: PageFormData = await pocket.collection("pages").create(data);
    return NextResponse.json({
      id: res.id as string,
      created: res.created as string,
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
