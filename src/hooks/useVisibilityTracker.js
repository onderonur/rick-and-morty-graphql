import { useRef, useState, useCallback } from "react";

// For more info: https://developers.google.com/web/updates/2016/04/intersectionobserver
function useVisibilityTracker({
  // The root to use for intersection.
  // If not provided, use the top-level document’s viewport.
  root = null,
  // Same as margin, can be 1, 2, 3 or 4 components, possibly negative lengths.
  // If an explicit root element is specified, components may be percentages of the
  // root element size.  If no explicit root element is specified, using a percentage
  // is an error.
  rootMargin = "0px",
  // Threshold(s) at which to trigger callback, specified as a ratio, or list of
  // ratios, of (visible area / total area) of the observed element (hence all
  // entries must be in the range [0, 1]).  Callback will be invoked when the visible
  // ratio of the observed element crosses a threshold in the list.
  threshold = [0]
} = {}) {
  const [isVisible, setIsVisible] = useState();
  const observerRef = useRef();
  const nodeRef = useRef();

  // TODO: MoviesApp'teki resizeobserver'ı düzelt. Dep'leri vs
  const trackedNodeRef = useCallback(
    node => {
      if (observerRef.current && nodeRef.current) {
        // Unobserving the previous node with previous observer
        observerRef.current.unobserve(nodeRef.current);

        observerRef.current = null;
        nodeRef.current = null;
      }

      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          },
          { root, rootMargin, threshold }
        );

        observer.observe(node);

        observerRef.current = observer;
        nodeRef.current = node;
      }
    },
    [root, rootMargin, threshold]
  );

  return [trackedNodeRef, { isVisible }];
}

export default useVisibilityTracker;
