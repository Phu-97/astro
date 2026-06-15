// astro/src/pages/api/contact.ts

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = (body?.email ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ message: "Email không hợp lệ." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(import.meta.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: import.meta.env.FROM_EMAIL,
      to: import.meta.env.SMTP_USER,
      subject: `[New subscribers] ${email}`,
      text: `Registration email: ${email}`,
    });

    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ message: err.message ?? "Lỗi server." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
