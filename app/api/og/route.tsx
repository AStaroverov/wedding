import { ImageResponse } from 'next/og';
import { event } from '@/lib/tokens';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FAF7F2',
          color: '#2B2A28',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 96, letterSpacing: -1 }}>{event.names}</div>
        <div style={{ marginTop: 24, fontSize: 28, letterSpacing: 4, textTransform: 'uppercase', color: '#6B6862' }}>
          {event.dateLabel} · {event.city}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
