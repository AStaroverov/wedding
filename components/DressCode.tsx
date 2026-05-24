import Image from 'next/image';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { dressCode } from '@/lib/content';

export function DressCode() {
  return (
    <Section id="dress-code">
      <Reveal>
        <div className="stack stack-md stack-center stack-narrow">
          <h2 className="display display-md">
            Дресс-код — {dressCode.rule}
          </h2>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 'var(--radius-soft)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/dress_code_horizontal.png"
              alt={`Дресс-код ${dressCode.rule}: примеры подходящей и неподходящей одежды`}
              fill
              sizes="(max-width: 600px) 100vw, 560px"
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
          <p className="body">{dressCode.short}</p>
          <p className="body-muted">{dressCode.notes}</p>
        </div>
      </Reveal>
    </Section>
  );
}
