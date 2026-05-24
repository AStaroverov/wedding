# marriage

Свадебное приглашение-одностраничник. Принципы и архитектура — см. [DESIGN.md](./DESIGN.md).

## Стек

- Next.js 14 (App Router)
- TypeScript
- Framer Motion
- React Hook Form + Zod
- `next/font` (Cormorant Garamond + Inter)
- API: Telegram-бот для RSVP, динамическая OG-картинка

## Запуск

```bash
npm install
cp .env.example .env.local   # заполнить TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
npm run dev
```

Открыть http://localhost:3000

## Скрипты

- `npm run dev` — dev-сервер
- `npm run build` — production-сборка
- `npm run start` — запуск собранного приложения
- `npm run typecheck` — TypeScript проверка
- `npm run lint` — ESLint

## Структура

```
app/                 # роуты App Router
  layout.tsx         # шрифты, мета, тема
  page.tsx           # компоновка секций
  globals.css        # CSS-токены
  api/rsvp/          # POST RSVP → Telegram
  api/og/            # динамическая OG-картинка
components/          # секции (Hero, Greeting, Countdown, …)
  ui/                # Section, Reveal, Button, Divider
lib/
  tokens.ts          # цвета, событие, motion
  telegram.ts        # отправка RSVP в Telegram
public/images/       # фото (AVIF/WebP)
```

## Что заполнить перед деплоем

1. `lib/tokens.ts` — имена, дата, город, адрес.
2. `components/Story.tsx`, `Greeting.tsx`, `Footer.tsx` — тексты.
3. `components/Program.tsx` — таймлайн.
4. `components/DressCode.tsx` — палитра.
5. `public/images/` — финальные фото; вставить в `Hero` и `Story`.
6. `.env.local` — токен бота и chat id.
