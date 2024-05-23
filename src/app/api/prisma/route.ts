import { NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/db";

export async function GET(request: NextRequest) {
  const newUser = await prisma.user.findFirst({
    where: {
      email: "ahmedkiller0234@gmail.com",
    },
  });

  return NextResponse.json(newUser);
}
