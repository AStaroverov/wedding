import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Divider } from './ui/Divider';
import { greeting, program } from '@/lib/content';

export function Program() {
  return (
    <Section id="program" variant="soft">
      <Reveal>
        <div className="stack stack-lg stack-center">
          <p className="body-lead stack-narrow" style={{ textAlign: 'center' }}>
            {greeting.text}
          </p>
          <Divider />
          <h2 className="display display-md">Программа</h2>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              width: '100%',
              maxWidth: 520,
              display: 'grid',
            }}
          >
            {program.map((item, i) => (
              <li
                key={item.time}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(110px, max-content) 1fr',
                  alignItems: 'baseline',
                  gap: 'var(--space-5)',
                  paddingBlock: 'var(--space-4)',
                  borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                }}
              >
                <span className="caption tabular">{item.time}</span>
                <span className="display display-sm">{item.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
