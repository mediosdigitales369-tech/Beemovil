import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real implementation, you would use nodemailer or a service like Resend
    // Example with nodemailer:
    /*
    const transporter = nodemailer.createTransport({
      host: 'mail.beemovil.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${data.nombre} ${data.apellido}" <servicioalcliente@beemovil.com>`,
      to: "servicioalcliente@beemovil.com",
      subject: `Cliente: ${data.asunto}`,
      html: `
        <h1>Datos del Contacto</h1>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Apellido:</strong> ${data.apellido}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Tel:</strong> ${data.tel}</p>
        <p><strong>Asunto:</strong> ${data.asunto}</p>
        <p><strong>Mensaje:</strong> ${data.mensaje}</p>
      `,
    });
    */

    console.log('Contact form data received:', data);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
