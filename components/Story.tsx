import Image from 'next/image';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';

export function Story() {
  return (
    <Section id="story" variant="dark">
      <Reveal>
        <div style={{ display: 'grid', gap: 'var(--space-8)', justifyItems: 'center', textAlign: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1536 / 1024',
              borderRadius: 'var(--radius-soft)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/fly.png"
              alt="Перелёт"
              fill
              sizes="(max-width: 600px) 100vw, 600px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <Image
            src="/images/date.png"
            alt=""
            width={1448}
            height={1086}
            sizes="(max-width: 600px) 80vw, 460px"
            style={{ width: 'clamp(220px, 70vw, 460px)', height: 'auto' }}
          />

          <p
            className="display"
            style={{
              margin: 0,
              fontSize: 'clamp(22px, 4vw, 32px)',
              color: '#FAF7F2',
              letterSpacing: '0.01em',
            }}
          >
            Дата свадьбы — 4 июля 2026, 13:00
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
