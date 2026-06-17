import QualifiedLeadEmail from "@/emails/qualifiedLeadEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      city,
      propertyType,
      propertyStatus,
      carpetArea,
      designerStatus,
      startTimeline,
      consent,
    } = body;

    if (
      (!name,
      !email,
      !phone,
      !city,
      !propertyType,
      !propertyStatus,
      !carpetArea,
      !designerStatus,
      !startTimeline,
      !consent)
    ) {
      return Response.json(
        { success: false, message: "Please fill all required fields." },
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
    const { data, error } = await resend.emails.send({
      from: "Benchmark Buildtech <noreply@contact.benchmarkbuildtech.co.in>",
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      react: QualifiedLeadEmail({
        name,
        email,
        phone,
        city,
        propertyType,
        propertyStatus,
        carpetArea,
        startTimeline,
        designerStatus,
      }),
    });
    if (error) {
      console.error("Resend Error: ", error);
      return Response.json(
        { success: false, message: "Failed to send email" },
        { status: 500 },
      );
    }
    return Response.json(
      { success: true, message: "Thank you! We'll get back to you shortly." },
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
