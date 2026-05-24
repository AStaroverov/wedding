import Image from 'next/image';
import { event } from '@/lib/tokens';

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FAF7F2',
        overflow: 'hidden',
        background: '#2B2A28',
      }}
    >
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        className="stack stack-center"
        style={{
          position: 'relative',
          paddingBottom: 'clamp(48px, 12vh, 120px)',
          paddingInline: 'var(--space-6)',
        }}
      >
        <p className="caption" style={{ color: '#FAF7F2', opacity: 0.85 }}>
          {event.project}
        </p>
        <h1 className="display display-xl">{event.names}</h1>
        <p className="caption tabular" style={{ color: '#FAF7F2', opacity: 0.85 }}>
          {event.dateLabel}
        </p>
      </div>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1,
          height: 32,
          background: '#FAF7F2',
          opacity: 0.5,
        }}
      />
    </section>
  );
}
