import { device } from '../device';
import { transition } from '../stories/styled';
import styled from 'styled-components';

const MonthTable = styled.table<{ first: boolean }>`
  border-collapse: collapse;
  display: ${(props): string => (props.first ? 'table' : 'none')};
  font-size: ${(props): string => props.theme.months.table.fontSize};
  position: relative;
  text-align: center;
  width: ${(props): string => props.theme.months.table.widths.sm};

  @media only screen and ${device.mobileL} {
    display: table;
    float: ${(props): string => (props.first ? 'left' : 'right')};
    width: ${(props): string => props.theme.months.table.widths.md};
  }

  @media only screen and ${device.tablet} {
    width: ${(props): string => props.theme.months.table.widths.lg};
  }
`;

const Caption = styled.tr`
  border-bottom: 1px solid
    ${(props): string => props.theme.months.table.borderColor};
  height: ${(props): string => props.theme.months.table.caption.height};
  vertical-align: middle;
`;

const NavButton = styled.span`
  background-color: ${(props): string =>
    props.theme.months.table.navButton.backgroundColor.base};
  border-radius: 4px;
  color: ${(props): string =>
    props.theme.months.table.navButton.textColor.base};
  cursor: pointer;
  display: inline-block;
  padding: 5px 10px;
  ${transition}

  &:hover {
    background-color: ${(props): string =>
      props.theme.months.table.navButton.backgroundColor.hover};
    color: ${(props): string =>
      props.theme.months.table.navButton.textColor.hover};
  }
`;

const MonthName = styled.th`
  text-transform: uppercase;
`;

const WeekDays = styled.tr`
  height: ${(props): string => props.theme.months.table.weekDays.height};
  vertical-align: middle;
`;

const WeekDayName = styled.th`
  font-size: ${(props): string => props.theme.months.table.weekDays.fontSize};
  font-weight: ${(props): string => props.theme.months.table.weekDays.fontSize};
  text-transform: uppercase;
`;

export { Caption, MonthName, MonthTable, NavButton, WeekDayName, WeekDays };
