import { NextLink } from '@/core/routing/components/next-link';
import { getMetadata } from '@/core/seo/seo.utils';
import { APP_TITLE } from '@/core/shared/shared.utils';
import { Card, CardImage, CardTitle } from '@/core/ui/components/card';
import charactersPic from '@/features/images/characters.jpg';
import episodesPic from '@/features/images/episodes.jpg';
import locationsPic from '@/features/images/locations.jpg';

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
    <main className="flex flex-col gap-12">
      <div className="mt-12 flex flex-col gap-4 text-center">
        <h1 className="text-7xl font-black text-primary sm:text-8xl">
          {APP_TITLE}
        </h1>
        <p className="text-xl font-semibold text-muted-foreground sm:text-2xl">
          {APP_TITLE} is a web built by using Next.js, GraphQL & TanStack Query.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {links.map((link) => {
          return (
            <div key={link.href} className="max-w-[21rem]">
              <NextLink href={link.href}>
                <Card>
                  <CardImage src={link.imageSrc} alt={link.title} priority />
                  <CardTitle asChild className="text-xl">
                    <h2>{link.title}</h2>
                  </CardTitle>
                </Card>
              </NextLink>
            </div>
          );
        })}
      </div>
    </main>
  );
}
