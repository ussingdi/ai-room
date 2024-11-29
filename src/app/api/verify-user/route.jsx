import { Users } from "@/db/schema";
import { db } from "@/index";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user } = await req.json();
  // console.log(user);
  //if user already exists
  try {
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress.emailAddress));
    console.log("UserInfo ----> " + userInfo);

    if (userInfo?.length === 0) {
      const SaveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({ Users });

      return NextResponse.json({ result: SaveResult[0].Users });
    }
    return NextResponse.json({ result: userInfo[0] });
  } catch (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ result: user });
}
