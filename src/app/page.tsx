import { NextLink } from '@/common/next-link';
import charactersPic from '@/images/characters.jpg';
import episodesPic from '@/images/episodes.jpg';
import locationsPic from '@/images/locations.jpg';
import home01Gif from '@/gifs/home01.webp';
import home02Gif from '@/gifs/home02.gif';
import { Card, CardImage, CardTitle } from '@/common/card';
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
          <CardImage src={home01Gif} alt="Rick dancing gif" />
        </Card>
      </div>
      <div className="sm:col-span-3">
        <Card>
          <CardImage src={home02Gif} alt="Snuffles gif" />
        </Card>
      </div>
    </div>
  );
}
