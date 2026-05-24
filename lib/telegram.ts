export type RsvpPayload = {
  name: string;
  drinks: string;
  transport: string;
  parking?: boolean;
  song?: string;
  wishes?: string;
};

export async function sendRsvpToTelegram(payload: RsvpPayload): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) throw new Error('Telegram env not configured');

  const text = [
    `RSVP: ${payload.name}`,
    `Напитки: ${payload.drinks}`,
    `Транспорт: ${payload.transport}`,
    payload.parking ? 'Парковка: нужна' : null,
    payload.song ? `Песня: ${payload.song}` : null,
    payload.wishes ? `Пожелания: ${payload.wishes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
  if (!res.ok) throw new Error(`Telegram ${res.status}`);
}
