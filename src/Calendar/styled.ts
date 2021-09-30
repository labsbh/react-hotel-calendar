import { device } from '../device';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: ${(props): string => props.theme.calendar.backgroundColor};
  border: ${(props): string => props.theme.calendar.border};
  border-radius: ${(props): string => props.theme.calendar.borderRadius};
  box-shadow: ${(props): string => props.theme.calendar.boxShadow};
  box-sizing: border-box;
  color: ${(props): string => props.theme.calendar.color};
  display: none;
  font-family: ${(props): string => props.theme.fontFamily};
  font-size: ${(props): string => props.theme.calendar.fontSize};
  height: auto;
  left: 0;
  line-height: ${(props): string => props.theme.calendar.lineHeight};
  overflow: hidden;
  position: absolute;
  transition: transform ${(props): string => props.theme.animationSpeed} ease;
  transform: scaleY(1);
  transform-origin: 50% 0;
  width: ${(props): string => props.theme.calendar.widths.sm};
  z-index: 1;

  @media only screen and ${device.mobileL} {
    width: ${(props): string => props.theme.calendar.widths.md};
  }

  @media only screen and ${device.tablet} {
    width: ${(props): string => props.theme.calendar.widths.lg};
  }

  &.closed {
    transform: scaleY(0);
  }

  &.rendered {
    display: block;
  }
`;

const DatePickerInner = styled.div`
  overflow: hidden;
  padding: ${(props): string => props.theme.calendar.padding};
`;

const Months = styled.div`
  @media only screen and ${device.mobileL} {
    overflow: visible;
    position: relative;

    &:before {
      background: ${(props): string => props.theme.months.spacer.color};
      bottom: 0;
      content: '';
      display: block;
      left: 50%;
      position: absolute;
      top: 0;
      width: ${(props): string => props.theme.months.spacer.width};
    }
    &:after {
      clear: both;
      content: '';
      display: block;
    }
  }
`;

export { DatePickerInner, Months, Wrapper };
