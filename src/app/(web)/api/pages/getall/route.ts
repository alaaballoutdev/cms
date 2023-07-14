import { PageFormData } from "components/Pages/PageForm";
import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const res: PageFormData[] = await pocket.collection("pages").getFullList();
    const pages = res.map((page) => {
      return {
        url: page.url,
        pagename: page.pagename,
        created: page.created,
        id: page.id,
      };
    });

    return NextResponse.json({
      pages,
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
