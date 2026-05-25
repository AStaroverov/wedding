import Image from 'next/image';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { dressCode } from '@/lib/content';

export function DressCode() {
  return (
    <Section id="dress-code" fullBleed>
      <Reveal>
        <div
          style={{
            paddingBlock: 'var(--section-pad-y)',
            display: 'grid',
            gap: 'var(--space-7)',
            justifyItems: 'center',
            textAlign: 'center',
          }}
        >
          <h2
            className="display display-md"
            style={{ paddingInline: 'var(--space-6)' }}
          >
            Дресс-код — {dressCode.rule}
          </h2>
          <div
            style={{
              position: 'relative',
              width: 'min(100vw - 32px, 1120px)',
              aspectRatio: '4 / 3',
              borderRadius: 'var(--radius-soft)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/dress_code_horizontal.png"
              alt={`Дресс-код ${dressCode.rule}: примеры подходящей и неподходящей одежды`}
              fill
              sizes="(max-width: 1120px) 100vw, 1120px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div
            role="list"
            aria-label="Цветовая палитра дресс-кода"
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              paddingInline: 'var(--space-6)',
            }}
          >
            {dressCode.palette.map((c) => (
              <div
                key={c.hex}
                role="listitem"
                style={{ display: 'grid', gap: 6, justifyItems: 'center' }}
              >
                <span
                  title={c.hex}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '999px',
                    background: c.hex,
                    border: '1px solid var(--line)',
                  }}
                />
                <span className="caption" style={{ fontSize: 11 }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>
          <p
            className="body"
            style={{ maxWidth: 560, paddingInline: 'var(--space-6)' }}
          >
            {dressCode.short}
          </p>
          <p
            className="body-muted"
            style={{ maxWidth: 560, paddingInline: 'var(--space-6)' }}
          >
            {dressCode.notes}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
