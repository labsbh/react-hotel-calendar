import styled, { DefaultTheme } from 'styled-components';

const theme: Required<DefaultTheme> = {
  fontFamily: "'Helvetica', 'Helvetica Neue', 'Arial', sans-serif",
  animationSpeed: '0.2s',
  calendar: {
    backgroundColor: '#fff',
    border: '0 none',
    borderRadius: '5px',
    boxShadow: '8px 8px 40px 5px rgba(0, 0, 0, 0.08)',
    color: '#484c55',
    fontSize: '14px',
    lineHeight: '14px',
    padding: '20px',
    widths: {
      sm: '100%',
      md: '460px',
      lg: '560px',
    },
  },
  months: {
    spacer: {
      color: '#dcdcdc',
      width: '1px',
    },
    table: {
      fontSize: '12px',
      borderColor: '#dcdcdc',
      caption: {
        height: '2.5rem',
      },
      navButton: {
        backgroundColor: {
          base: 'rgba(214, 218, 229, 1)',
          hover: 'rgba(116, 107, 253, 1)',
        },
        textColor: {
          base: 'rgba(157, 166, 184, 1)',
          hover: 'rgba(255, 255, 255, 1)',
        },
      },
      weekDays: {
        height: '2rem',
        fontSize: '11px',
        fontWeight: '400',
      },
      widths: {
        sm: '100%',
        md: '180px',
        lg: '230px',
      },
    },
  },
  days: {
    textColor: '#acb2c1',
    padding: '9px 7px',
    today: {
      textColor: '#ffffff',
      backgroundColor: '#484c55',
    },
    noCheckIn: {
      textColor: '#acb2c1',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },
    noCheckOut: {
      textColor: '#acb2c1',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },
    invalid: {
      textColor: '#e8ebf4',
      backgroundColor: 'transparent',
    },
    disabled: {
      textColor: '#e8ebf4',
      backgroundColor: 'transparent',
      crossColor: '#ff0000',
    },
    dowDisabled: {
      textColor: '#e8ebf4',
      backgroundColor: 'rgba(232, 235, 244, 0.5)',
    },
  },
  tooltip: {
    backgroundColor: '#ffe684',
    textColor: '#484c55',
    borderRadius: '2px',
    fontSize: '11px',
    padding: '5px 10px',
  },
  topBar: {
    backgroundColor: 'transparent',
    textColor: '#acb2c1',
    closeButton: {
      backgroundColor: {
        base: '#746bfd',
        hover: '#484c55',
      },
      textColor: {
        base: '#ffffff',
        hover: '#ffffff',
      },
    },
  },
};

const transition = `
  transition-duration: 0.2s;
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const Wrapper = styled.div.attrs(() => ({
  className: 'rhc-wrapper',
}))`
  position: relative;
`;

export { theme, transition, Wrapper };
