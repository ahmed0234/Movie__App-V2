// eslint-disable-next-line
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  // eslint-disable-next-line
  const svix_id = headerPayload.get("svix-id");
  // eslint-disable-next-line
  const svix_timestamp = headerPayload.get("svix-timestamp");
  // eslint-disable-next-line
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  // eslint-disable-next-line
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      // eslint-disable-next-line
      "svix-id": svix_id,
      // eslint-disable-next-line
      "svix-timestamp": svix_timestamp,
      // eslint-disable-next-line
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    // eslint-disable-next-line
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;
    // eslint-disable-next-line
    if (!id || !email_addresses) {
      return new Response("Error occured -- missing data", { status: 400 });
    }
    // eslint-disable-next-line
    const newUser = await prisma.user.create({
      data: {
        // eslint-disable-next-line
        email: email_addresses[0].email_address,
        password: "1234",
        // eslint-disable-next-line
        name: first_name + " " + last_name,
        // eslint-disable-next-line
        img: image_url,
      },
    });
  }

  return new Response("", { status: 200 });
}
