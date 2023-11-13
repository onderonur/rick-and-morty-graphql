import { getMetadata } from '@/seo/seo-utils';

export const metadata = getMetadata({
  title: 'Not Found',
  description: 'The resource you are looking for is not found.',
});

export default function NotFound() {
  return (
    <div className="text-center mt-48 max-w-screen-sm mx-auto">
      <h1 className="font-bold text-7xl">404</h1>
      <p className="mt-4 text-slate-300">
        The resource you are looking for is not found.
      </p>
    </div>
  );
}
