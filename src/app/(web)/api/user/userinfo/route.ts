import { Database } from "lib/Models/Database";
import { NextRequest, NextResponse } from "next/server";
import { Unauthorized } from "utils/TypicalApiResponses";
import { validateAuthentication } from "lib/auth/AuthValidation";

export async function GET(request: NextRequest) {
  const isValid = await validateAuthentication();
  if (!isValid) {
    return Unauthorized();
  }
  const pocket = Database.getConnection();
  return NextResponse.json(
    {
      userInfo: pocket.authStore.model,
    },
    { status: 200 }
  );
}
