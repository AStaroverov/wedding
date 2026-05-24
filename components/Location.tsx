import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { event } from '@/lib/tokens';

export function Location() {
  const { lat, lon } = event.coords;
  const ll = `${lon}%2C${lat}`;
  const pt = `${lon},${lat},pm2rdm`;
  const widget = `https://yandex.ru/map-widget/v1/?ll=${ll}&z=${event.mapZoom}&pt=${pt}`;
  const mapsHref = `https://yandex.ru/maps/?ll=${ll}&z=${event.mapZoom}&pt=${pt}`;

  return (
    <Section id="location" backgroundImage="/images/fly_bg.png">
      <Reveal>
        <div className="stack stack-md stack-center">
          <h2 className="display display-md">Место проведения</h2>
          <p className="body">{event.address}</p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 'var(--radius-soft)',
              overflow: 'hidden',
              border: '1px solid var(--line)',
            }}
          >
            <iframe
              src={widget}
              title={`Карта: ${event.address}`}
              loading="lazy"
              allow="geolocation"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
          <a href={mapsHref} target="_blank" rel="noreferrer noopener">
            <Button variant="ghost">Открыть в Яндекс.Картах</Button>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
