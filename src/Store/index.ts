/* eslint-disable @typescript-eslint/no-empty-function */
import { enUS } from 'date-fns/locale';
import { createContext } from 'react';
import { CalendarContext, OptionContext } from '../typings';
import { enTranslations } from '../translations';

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
    i18n: enTranslations,
};

const defaultCalendar: CalendarContext = {
    dayHover: false,
    setDayHover: (_value) => {
    },
};

const OptionCtx = createContext<OptionContext>(defaultOptions);
const CalendarCtx = createContext<CalendarContext>(defaultCalendar);

export { defaultOptions, OptionCtx, CalendarCtx };
