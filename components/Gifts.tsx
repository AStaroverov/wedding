import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Divider } from './ui/Divider';
import { gifts } from '@/lib/content';

export function Gifts() {
  return (
    <Section id="gifts" variant="dark">
      <Reveal>
        <div className="stack stack-md stack-center stack-narrow">
          <Divider />
          <h2 className="display display-md" style={{ color: '#FAF7F2' }}>
            Подарки — {gifts.title.toLowerCase()}
          </h2>
          <p className="body" style={{ color: '#DDE3D4' }}>
            {gifts.body}
          </p>
          <Divider />
        </div>
      </Reveal>
    </Section>
  );
}
