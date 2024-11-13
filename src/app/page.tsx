import { NextLink } from '@/core/routing/components/next-link';
import { getMetadata } from '@/core/seo/seo.utils';
import { Card, CardImage, CardTitle } from '@/core/ui/components/card';
import charactersPic from '@/features/images/characters.jpg';
import episodesPic from '@/features/images/episodes.jpg';
import locationsPic from '@/features/images/locations.jpg';
import runningPic from '@/features/images/running.jpg';
import snufflesPic from '@/features/images/snuffles.jpg';

export const metadata = getMetadata({
  title: 'Home',
  pathname: '/',
});

const links = [
  { href: '/characters', title: 'Characters', imageSrc: charactersPic },
  { href: '/episodes', title: 'Episodes', imageSrc: episodesPic },
  { href: '/locations', title: 'Locations', imageSrc: locationsPic },
];

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Home</h1>
      <div className="grid gap-4 sm:grid-cols-6">
        {links.map((link) => {
          return (
            <div key={link.href} className="sm:col-span-2">
              <NextLink href={link.href}>
                <Card>
                  <CardTitle asChild className="text-3xl">
                    <h2>{link.title}</h2>
                  </CardTitle>
                  <CardImage src={link.imageSrc} alt={link.title} priority />
                </Card>
              </NextLink>
            </div>
          );
        })}
        <div className="sm:col-span-3">
          <Card>
            <CardImage
              src={runningPic}
              alt="Rick and Morty are running"
              priority
            />
          </Card>
        </div>
        <div className="sm:col-span-3">
          <Card>
            <CardImage src={snufflesPic} alt="Snuffles" priority />
          </Card>
        </div>
      </div>
    </main>
  );
}
