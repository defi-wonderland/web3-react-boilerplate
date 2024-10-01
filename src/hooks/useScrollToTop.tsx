import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

export function useScrollToTop() {
  const router = useRouter();

  useLayoutEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}
