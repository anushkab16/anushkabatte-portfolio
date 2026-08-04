import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Input too long' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error('Missing SMTP environment variables')
    return NextResponse.json({ error: 'Server email is not configured' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
