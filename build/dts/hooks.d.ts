import { BreakPoints } from './typings';
declare const useCurrentWidth: () => number;
declare const useBreakpoints: (breakpoints: BreakPoints) => Record<string, boolean>;
declare const useBreakpointsUp: (breakpoints: BreakPoints) => Record<string, boolean>;
declare const useBreakpointsDown: (breakpoints: BreakPoints) => Record<string, boolean>;
export { useCurrentWidth, useBreakpoints, useBreakpointsUp, useBreakpointsDown, };
