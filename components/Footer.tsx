import { Section } from './ui/Section';

export function Footer() {
  return (
    <Section variant="dark">
      <div className="stack stack-center" style={{ gap: 'var(--space-3)' }}>
        <p className="caption" style={{ color: '#DDE3D4' }}>С любовью</p>
        <p style={{ margin: 0, color: '#DDE3D4', opacity: 0.85 }}>
          По вопросам — организатор: +7 000 000-00-00
        </p>
      </div>
    </Section>
  );
}
