import { Database } from "lib/Models/Database";
import { BadRequest, Success, Unauthorized } from "utils/TypicalApiResponses";
import { validateAuthentication } from "lib/auth/AuthValidation";

type EditRequestBody = {
  pagename: string;
  content: string;
  url: string;
  id: string;
  content_ar: string;
};

export async function PUT(request: Request) {
  const isValid = await validateAuthentication();
  if (!isValid) {
    return Unauthorized();
  }
  const body: EditRequestBody = await request.json();
  const { pagename, content, url, id, content_ar } = body;
  const pocket = Database.getConnection();
  try {
    await pocket
      .collection("pages")
      .update(id, { content, url, pagename, content_ar });
  } catch (error) {
    return BadRequest();
  }

  return Success();
}
