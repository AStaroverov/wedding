import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Divider } from './ui/Divider';
import { greeting, program } from '@/lib/content';

export function Program() {
  return (
    <Section id="program" variant="soft">
      <Reveal>
        <div className="stack stack-lg stack-center">
          <p
            className="body-lead stack-narrow"
            style={{ textAlign: 'center', whiteSpace: 'pre-line' }}
          >
            {greeting.text}
          </p>
          <Divider />
          <h2 className="display display-md">Программа</h2>
          <table
            style={{
              width: '100%',
              maxWidth: 520,
              borderCollapse: 'collapse',
              tableLayout: 'auto',
            }}
          >
            <tbody>
              {program.map((item, i) => (
                <tr
                  key={item.time}
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                  }}
                >
                  <td
                    className="caption tabular"
                    style={{
                      fontSize: 'clamp(14px, 1.7vw, 17px)',
                      paddingBlock: 'var(--space-4)',
                      paddingRight: 'var(--space-5)',
                      verticalAlign: 'baseline',
                      whiteSpace: 'nowrap',
                      width: '37%',
                      textAlign: 'right',
                    }}
                  >
                    {item.time}
                  </td>
                  <td
                    className="display"
                    style={{
                      fontSize: 'clamp(19px, 2.7vw, 25px)',
                      paddingBlock: 'var(--space-4)',
                      verticalAlign: 'baseline',
                      textAlign: 'left',
                    }}
                  >
                    {item.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
