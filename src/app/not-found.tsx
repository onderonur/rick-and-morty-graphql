import { getMetadata } from '@/core/seo/seo.utils';

export const metadata = getMetadata({
  title: 'Not Found',
  description: 'The resource you are looking for is not found.',
});

export default function NotFound() {
  return (
    <div className="mx-auto mt-48 flex max-w-screen-sm flex-col gap-4 text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-4xl font-semibold text-muted">
        The resource you are looking for is not found.
      </p>
    </div>
  );
}
