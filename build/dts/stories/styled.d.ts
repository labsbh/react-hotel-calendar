import { DefaultTheme } from 'styled-components';
declare const theme: Required<DefaultTheme>;
declare const transition = "\n  transition-duration: 0.2s;\n  transition-property: color, background-color, border-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n";
declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export { theme, transition, Wrapper };
