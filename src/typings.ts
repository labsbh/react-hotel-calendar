import { Locale } from 'date-fns';
import { ReactElement, RefObject } from 'react';
import { enTranslations as translations } from './translations';

export interface HotelCalendarTheme {
    fontFamily?: string;
    animationSpeed?: string;
    calendar?: {
        backgroundColor?: string;
        border?: string;
        borderRadius?: string;
        boxShadow?: string;
        color?: string;
        fontSize?: string;
        lineHeight?: string;
        padding?: string;
        widths?: {
            sm?: string;
            md?: string;
            lg?: string;
        };
    };
    months?: {
        spacer?: {
            color?: string;
            width?: string;
        };
        table?: {
            fontSize?: string;
            borderColor?: string;
            caption?: {
                height?: string;
            };
            navButton?: {
                backgroundColor?: {
                    base?: string;
                    hover?: string;
                };
                textColor?: {
                    base?: string;
                    hover?: string;
                };
            };
            weekDays?: {
                height?: string;
                fontSize?: string;
                fontWeight?: string;
            };
            widths?: {
                sm?: string;
                md?: string;
                lg?: string;
            };
        };
    };
    days?: {
        textColor?: string;
        padding?: string;
        noCheckIn?: {
            backgroundColor?: string;
            textColor?: string;
        };
        noCheckOut?: {
            backgroundColor?: string;
            textColor?: string;
        };
        invalid?: {
            backgroundColor?: string;
            textColor?: string;
        };
        disabled?: {
            backgroundColor?: string;
            crossColor?: string;
            textColor?: string;
        };
        dowDisabled?: {
            backgroundColor?: string;
            textColor?: string;
        };
        today?: {
            backgroundColor?: string;
            textColor?: string;
        };
    };
    tooltip?: {
        backgroundColor?: string;
        textColor?: string;
        borderRadius?: string;
        fontSize?: string;
        padding?: string;
    };
}

export type BreakPoint = {
    min: number;
    max: number | null;
};

export type BreakPoints = Record<string, BreakPoint>;

export type DayMonthType = 'lastMonth' | 'visibleMonth' | 'nextMonth';

export type TooltipCallback = (
    hover: Date,
) => string | ReactElement;

export type DayOfMonth = {
    date: Date;
    title: string;
    type: DayMonthType;
    isValid: boolean;
    isToday: boolean;
    isStartDate: boolean;
    isDayBeforeDisabledDate: boolean;
    isDisabled: boolean;
    isFirstEnabledDate: boolean;
    isDayOfWeekDisabled: boolean;
    isFirstDisabledDate: boolean;
    isNoCheckIn: boolean;
    isNoCheckOut: boolean;
};

export type DayHover = MonthDayInfos & {
    ref: RefObject<HTMLTableCellElement>;
};

export type DayHoverCallback = (_day: Day, _left: number, _top: number) => any;

export type OptionContext = {
    locale: Locale;
    format: string;
    startDate: Date | false;
    endDate: Date | false;
    disabledDates: Array<Date>;
    noCheckInDates: Array<Date>;
    noCheckOutDates: Array<Date>;
    disabledDaysOfWeek: Array<number>;
    hoveringTooltip: boolean | TooltipCallback;
    moveBothMonths: boolean;
    onDayClick: undefined | false | ((date: Date) => any);
};

export type CalendarContext = {
    dayHover: DayHover | false;
    setDayHover: (_value: DayHover | false) => void;
};

export type MonthDayInfos = DayOfMonth;

export type Translations = typeof translations;

export interface InputElementProps {
    value?: string,
    onClick?: () => any,
}

export type HotelCalendarProps = {
    locale: Locale;
    format: string;
    startDate: Date | false;
    endDate: Date | false;
    disabledDates: Array<Date>;
    noCheckInDates: Array<Date>;
    noCheckOutDates: Array<Date>;
    disabledDaysOfWeek: Array<number>;
    hoveringTooltip: boolean | TooltipCallback;
    moveBothMonths: boolean;
    i18n: Translations;
    onDayClick: undefined | false | ((_date: Date) => any);
    theme: HotelCalendarTheme;
    disabledDatesBetweenChecks: boolean;
};

export type CalendarProps = {
};

export type MonthProps = {
    first: boolean;
    date: Date;
    goToNextMonth: () => any;
    goToPreviousMonth: () => any;
    previousMonth?: Date;
    nextMonth?: Date;
};

export type DayProps = MonthDayInfos;
