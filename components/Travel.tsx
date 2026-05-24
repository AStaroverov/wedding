import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { travel } from '@/lib/content';

export function Travel() {
  return (
    <Section id="travel" variant="soft">
      <Reveal>
        <div className="stack stack-lg stack-center">
          <h2 className="display display-md">Как добраться</h2>
          <div
            style={{
              display: 'grid',
              gap: 'var(--space-5)',
              width: '100%',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {travel.map((option) => (
              <article key={option.id} className="stack" style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-soft)',
                padding: 'var(--space-6)',
                gap: 'var(--space-3)',
                textAlign: 'left',
              }}>
                <span className="caption">{option.label}</span>
                <h3 className="display display-sm">{option.title}</h3>
                <p className="body">{option.body}</p>
                {option.anchor && (
                  <a
                    href={option.anchor.href}
                    style={{
                      marginTop: 'var(--space-2)',
                      color: 'var(--accent)',
                      fontSize: 14,
                      letterSpacing: '0.02em',
                    }}
                  >
                    → {option.anchor.text}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
