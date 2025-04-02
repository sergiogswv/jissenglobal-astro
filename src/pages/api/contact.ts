import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const name = typeof formData.get("name") === "string" ? formData.get("name") : null;
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
    }

    // Enviar el correo con Resend
    const data = await resend.emails.send({
      from: "Jissen Global <tucorreo@tudominio.com>", // Debe ser un dominio verificado en Resend
      to: ["destinatario@correo.com"], // Cambia esto por el correo que recibirá los mensajes
      subject: `Nuevo mensaje de contacto de ${typeof name === "string" ? name : "Desconocido"}`,
      html: `<p><strong>Nombre:</strong> ${typeof name === "string" ? name : "Desconocido"}</p>
             <p><strong>Email:</strong> ${typeof email === "string" ? email : "Desconocido"}</p>
             <p><strong>Mensaje:</strong> ${typeof message === "string" ? message : "Desconocido"}</p>`,
    });
    console.log({data});
    return new Response(JSON.stringify({ success: true, message: "Correo enviado correctamente" }), { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(JSON.stringify({ error: "No se pudo enviar el correo" }), { status: 500 });
  }
}
