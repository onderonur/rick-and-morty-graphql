import { useCallback, useEffect, useRef } from 'react';

export function useOnClickOutside<
  Element extends HTMLElement = React.ElementRef<'div'>,
>(callback: VoidFunction) {
  const savedCallbackRef = useRef<VoidFunction>(callback);
  const clickOutsideHandlerRef = useRef<(e: MouseEvent) => void>();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  const nodeRef = useCallback((node: Element) => {
    const clickHandler = clickOutsideHandlerRef.current;

    if (clickHandler) {
      document.removeEventListener('click', clickHandler);
    }

    function handleClickOutside(e: MouseEvent) {
      const savedCallback = savedCallbackRef.current;

      if (node && !node.contains(e.target as Node)) {
        savedCallback();
      }
    }

    document.addEventListener('click', handleClickOutside);

    clickOutsideHandlerRef.current = handleClickOutside;
  }, []);

  return nodeRef;
}
