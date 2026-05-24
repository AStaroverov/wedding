import { Hero } from '@/components/Hero';
import { Program } from '@/components/Program';
import { Location } from '@/components/Location';
import { Travel } from '@/components/Travel';
import { DressCode } from '@/components/DressCode';
import { Gifts } from '@/components/Gifts';
import { Rsvp } from '@/components/Rsvp';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <Program />
      <Location />
      <Travel />
      <DressCode />
      <Gifts />
      <Rsvp />
      <Footer />
    </main>
  );
}
