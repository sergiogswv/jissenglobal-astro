import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }: { request: Request }) => {
  console.log('Iniciando procesamiento de solicitud');
  console.log({ request });
  // Verificar que tenemos la API key
  if (!resend) {
    console.error('API Key de Resend no encontrada');
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error de configuración del servidor: API Key no encontrada',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  try {
    const formData = await request.formData();

    const name = typeof formData.get("name") === "string" ? formData.get("name") : null;
    const email = formData.get("email");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const options = formData.get("options");

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
    }

    // Enviar el correo con Resend
    const {data, error} = await resend.emails.send({
      from: "Jissen Global - Mensaje desde Sitio Web <operativo@jissenglobal.com>", // Debe ser un dominio verificado en Resend
      to: ["operaciones@jissenglobal.com"], // Cambia esto por el correo que recibirá los mensajes
      subject: `Nuevo mensaje de contacto de ${typeof name === "string" ? name : "Desconocido"}`,
      html: `<p><strong>Nombre:</strong> ${typeof name === "string" ? name : "Desconocido"}</p>
             <p><strong>Email:</strong> ${typeof email === "string" ? email : "Desconocido"}</p>
             <p><strong>Telefono:</strong> ${typeof phone === "string" ? phone : "Desconocido"}</p>
             <p><strong>Opcion de envio:</strong> ${typeof options === "string" ? options : "Desconocido"}</p>
             <p><strong>Mensaje:</strong> ${typeof message === "string" ? message : "Desconocido"}</p>`,
    });
    console.log({ data });
    return new Response(JSON.stringify({ message: "Correo enviado correctamente", data, error }), { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(JSON.stringify({ error: "No se pudo enviar el correo" }), { status: 500 });
  }
}
