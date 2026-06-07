import ConsultationRequestEmail from "@/emails/consultationRequestEmail";
import ConsultationRequest from "@/emails/consultationRequestEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, consent } = body;

    // validate the form data fields
    if (!name || !email || !phone || !consent) {
      return Response.json(
        {
          Success: false,
          message: "Please fill all required fields",
        },
        { status: 400 },
      );
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid Indian mobile number.",
        },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Benchmark Buildtech <onboarding@resend.dev>",
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Consultation Request from ${name}`,
      react: ConsultationRequestEmail({ name, email, phone, message }),
    });

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
