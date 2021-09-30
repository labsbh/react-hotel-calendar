import styled from 'styled-components';
import { transition } from '../stories/styled';

type ExtendedProps = { hover: boolean };

const DayWrapper = styled.td.attrs<ExtendedProps>(({ className }) => ({
    className: `${className || ''} day`
}))<ExtendedProps>`
  background-color: ${(props): string =>
          props.hover
                  ? props.theme.days.selected.backgroundColor.hover
                  : 'transparent'};
  color: ${(props): string => props.theme.days.textColor};
  padding: ${(props): string => props.theme.days.padding};

  ${transition}
  &.valid {
    cursor: pointer;
  }

  &.no-checkin {
    color: ${(props): string => props.theme.days.noCheckIn.textColor};
    position: relative;

    &:after {
      background-color: ${(props): string =>
              props.theme.days.noCheckIn.backgroundColor};
      bottom: 0;
      content: '';
      display: block;
      left: 50%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }

  &.no-checkout {
    color: ${(props): string => props.theme.days.noCheckOut.textColor};
    position: relative;

    &:after {
      background-color: ${(props): string =>
              props.theme.days.noCheckOut.backgroundColor};
      bottom: 0;
      content: '';
      display: block;
      left: 0;
      position: absolute;
      right: 50%;
      top: 0;
      z-index: -1;
    }
  }

  &.invalid {
    background-color: ${(props): string =>
            props.theme.days.invalid.backgroundColor};
    color: ${(props): string => props.theme.days.invalid.textColor};
  }

  &.disabled {
    background-color: ${(props): string =>
            props.theme.days.disabled.backgroundColor};
    color: ${(props): string => props.theme.days.disabled.textColor};
    position: relative;

    &:after {
      content: '\\00d7';
      left: 50%;
      position: absolute;
      color: ${(props): string => props.theme.days.disabled.crossColor};
      font-size: 16px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.day-of-week-disabled {
    background-color: ${(props): string =>
            props.theme.days.dowDisabled.backgroundColor};
    color: ${(props): string => props.theme.days.dowDisabled.textColor};
  }

  &.today {
    background-color: ${(props): string => props.theme.days.today.backgroundColor};
    color: ${(props): string => props.theme.days.today.textColor};
  }

  &.type-lastMonth,
  &.type-nextMonth {
    visibility: hidden;
  }
`;

export { DayWrapper };
