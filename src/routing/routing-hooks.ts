import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// https://nextjs.org/docs/app/api-reference/functions/use-pathname#do-something-in-response-to-a-route-change
export function useOnRouteChange(callback: VoidFunction) {
  const callbackRef = useRef<VoidFunction>(callback);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      callbackRef.current();
    };
  }, [pathname, searchParams]);
}
