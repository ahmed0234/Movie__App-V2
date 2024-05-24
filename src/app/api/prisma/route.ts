import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const newUser = await prisma.user.findFirst({
    where: {
      email: "hassan1234@gmail.com",
    },
  });

  return NextResponse.json(newUser);
}
