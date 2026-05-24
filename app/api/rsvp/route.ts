import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendRsvpToTelegram } from '@/lib/telegram';

const schema = z.object({
  name: z.string().min(2).max(100),
  drinks: z.enum(['Больше алкогольные', '50 на 50', 'Больше безалкогольные']),
  transport: z.enum(['Машина (я водитель)', 'Машина (я пассажир)', 'Такси']),
  parking: z.boolean().optional(),
  song: z.string().max(200).optional(),
  wishes: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  try {
    await sendRsvpToTelegram(parsed.data);
  } catch (err) {
    console.error('rsvp send failed', err);
    return NextResponse.json({ error: 'send failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
