import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/components/email-template";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required!" }),
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address." }),
        { status: 400 }
      );
    }

    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: email,
      to: ["abdoattallah3@gmail.com"],
      subject: subject,
      react: EmailTemplate({
        firstName: name,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
}
