import { Database } from "lib/Models/Database";
import { PageRecord } from "lib/Models/Types";
import { NextRequest, NextResponse } from "next/server";
import { BadRequest } from "utils/TypicalApiResponses";

export async function GET(request: NextRequest) {
  const pocket = Database.getConnection();
  try {
    const pages = await pocket.collection("pages").getFullList<PageRecord>();
    return NextResponse.json({
      pages,
    });
  } catch (error) {
    return BadRequest();
  }
}
