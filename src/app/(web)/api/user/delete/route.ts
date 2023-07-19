import { Database } from "lib/Models/Database";
import { NextRequest } from "next/server";
import { BadRequest, Success, Unauthorized } from "utils/TypicalApiResponses";
import { validateAuthentication } from "lib/auth/AuthValidation";

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return BadRequest();
  }
  const isValid = await validateAuthentication();
  if (!isValid) {
    return Unauthorized();
  }
  const pocket = Database.getConnection();
  try {
    await pocket.collection("users").delete(id);
    return Success();
  } catch (error) {
    return BadRequest();
  }
}
