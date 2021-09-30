/* eslint-disable @typescript-eslint/no-empty-function */
import { enUS } from 'date-fns/locale';
import { createContext } from 'react';
import { CalendarContext, OptionContext } from '../typings';

const defaultOptions: OptionContext = {
  locale: enUS,
  format: 'P',
  startDate: new Date(),
  endDate: false,
  disabledDates: [],
  noCheckInDates: [],
  noCheckOutDates: [],
  disabledDaysOfWeek: [],
  hoveringTooltip: true,
  moveBothMonths: true,
  onDayClick: undefined,
};

const defaultCalendar: CalendarContext = {
  dayHover: false,
  setDayHover: (_value) => {},
};

const OptionCtx = createContext<OptionContext>(defaultOptions);
const CalendarCtx = createContext<CalendarContext>(defaultCalendar);

export { defaultOptions, OptionCtx, CalendarCtx };
