import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Body = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();
    console.log(body);
    const { email, name, subject, message } = body;
  console.log(email);
    const fromEmail = process.env.EMAIL_FROM || "Acme <onboarding@resend.dev>";
    const contactEmail = process.env.EMAIL_TO || "delivered@resend.dev";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: subject,
      react: EmailTemplate({ name, subject, message, email }),
    });

    if (error) {
          console.log("e1", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
     console.log("e2", error);
    return Response.json({ error }, { status: 500 });
  }
}