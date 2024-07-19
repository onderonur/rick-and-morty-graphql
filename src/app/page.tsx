import { Card, CardImage, CardTitle } from '@/common/card';
import charactersPic from '@/images/characters.jpg';
import episodesPic from '@/images/episodes.jpg';
import locationsPic from '@/images/locations.jpg';
import runningPic from '@/images/running.jpg';
import snufflesPic from '@/images/snuffles.jpg';
import { NextLink } from '@/routing/next-link';
import { getMetadata } from '@/seo/seo-utils';

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
    <>
      <h1 className="sr-only">Home</h1>
      <div className="grid sm:grid-cols-6">
        {links.map((link) => {
          return (
            <div key={link.href} className="sm:col-span-2">
              <NextLink href={link.href}>
                <Card withTitle>
                  <CardTitle>{link.title}</CardTitle>
                  <CardImage src={link.imageSrc} alt={link.title} priority />
                </Card>
              </NextLink>
            </div>
          );
        })}
        <div className="sm:col-span-3">
          <Card>
            <CardImage src={runningPic} alt="Rick and Morty are running" />
          </Card>
        </div>
        <div className="sm:col-span-3">
          <Card>
            <CardImage src={snufflesPic} alt="Snuffles" />
          </Card>
        </div>
      </div>
    </>
  );
}
