import { Database } from "lib/Models/Database";
import { NextResponse } from "next/server";
import { InvalidCredentials } from "utils/TypicalApiResponses";

type RequestBody = {
  identity: string;
  password: string;
};

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  try {
    const pocket = Database.getConnection();
    const authData = await pocket.admins.authWithPassword(
      body.identity,
      body.password
    );
    return NextResponse.json(authData);
  } catch (error) {
    return InvalidCredentials();
  }
}
