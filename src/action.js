"use server";
import { Resend } from "resend";
import EmailTemplate from "./components/email-template";

export const sendEmail = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const phone = formData.get("phone");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Thanks for contacting us<hinal.resend@resend.dev>",
      to: "hinal.g@simformsolutions.com",
      subject: "New appointment request 🚀",
      reply_to: email,
      // attachments: [
      //   {
      //     path: 'path/to/file/invoice.pdf',
      //     filename: 'invoice.pdf',
      //   },
      // ],
      react: EmailTemplate({ name, email, message, phone }),
    });

    // We can send emails in batches as well using resend.batch.send
    // await resend.batch.send([
    //   {
    //     from: "Acme <onboarding@resend.dev>",
    //     to: "hinal.g@simformsolutions.com",
    //     subject: "hello world",
    //     react: "<h1>it works!</h1>",
    //   },
    //   {
    //     from: "Acme <onboarding@resend.dev>",
    //     to: "hemil.r@simformsolutions.com",
    //     subject: "world hello",
    //     react: "<p>it works!</p>",
    //   },
    // ]);

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      error: error.message,
      success: false,
    };
  }
};
