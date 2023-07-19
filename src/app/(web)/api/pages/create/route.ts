import { Database } from "lib/Models/Database";
import { NextResponse } from "next/server";
import { BadRequest, Unauthorized } from "utils/TypicalApiResponses";
import { validateAuthentication } from "lib/auth/AuthValidation";
import { PageRecord } from "lib/Models/Types";

type CreateRequestBody = {
  pagename: string;
  content: string;
  url: string;
  content_ar: string;
};

export async function POST(request: Request) {
  const isValid = await validateAuthentication();
  if (!isValid) {
    return Unauthorized();
  }
  const body: CreateRequestBody = await request.json();
  const { pagename, content, url, content_ar } = body;
  const data = { pagename, content, url, content_ar };
  const pocket = Database.getConnection();
  try {
    const res: PageRecord = await pocket.collection("pages").create(data);
    return NextResponse.json({
      id: res.id,
      created: res.created,
    });
  } catch (error) {
    return BadRequest();
  }
}
