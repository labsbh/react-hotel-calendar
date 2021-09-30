import { useEffect, useState } from 'react';
import { BreakPoints } from './typings';

const getWidth = (): number =>
  typeof window === 'undefined'
    ? 0
    : window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

const useCurrentWidth = (): number => {
  const [width, setWidth] = useState<number>(getWidth());

  useEffect(() => {
    let timeout: number | null = null;
    const resizeListener = (): void => {
      if (typeof window !== 'undefined') {
        if (timeout) {
          window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(() => setWidth(getWidth()), 150);
      }
    };
    window.addEventListener('resize', resizeListener);

    return (): void => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeListener);
      }
    };
  }, []);

  return width;
};

const useBreakpoints = (breakpoints: BreakPoints): Record<string, boolean> => {
  const width = useCurrentWidth();

  return Object.keys(breakpoints).reduce((result, key) => {
    const { min, max } = breakpoints[key];
    result[key] = width >= min && (max === null || width <= max);
    return result;
  }, {} as Record<string, boolean>);
};

const useBreakpointsUp = (
  breakpoints: BreakPoints,
): Record<string, boolean> => {
  const width = useCurrentWidth();

  return Object.keys(breakpoints).reduce((result, key) => {
    const { min } = breakpoints[key];
    result[key] = width >= min;
    return result;
  }, {} as Record<string, boolean>);
};

const useBreakpointsDown = (
  breakpoints: BreakPoints,
): Record<string, boolean> => {
  const width = useCurrentWidth();

  return Object.keys(breakpoints).reduce((result, key) => {
    const { max } = breakpoints[key];
    result[key] = max === null || width <= max;
    return result;
  }, {} as Record<string, boolean>);
};

export {
  useCurrentWidth,
  useBreakpoints,
  useBreakpointsUp,
  useBreakpointsDown,
};
