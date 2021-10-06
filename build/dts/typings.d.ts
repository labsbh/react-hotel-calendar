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
export declare type BreakPoint = {
    min: number;
    max: number | null;
};
export declare type BreakPoints = Record<string, BreakPoint>;
export declare type DayMonthType = 'lastMonth' | 'visibleMonth' | 'nextMonth';
export declare type TooltipCallback = (hover: MonthDayInfos) => string | ReactElement;
export declare type DayOfMonth = {
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
export declare type DayHover = MonthDayInfos & {
    ref: RefObject<HTMLTableCellElement>;
};
export declare type DayHoverCallback = (_day: Day, _left: number, _top: number) => any;
export declare type OptionContext = {
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
    onDayClick: undefined | false | ((date: Date) => any);
};
export declare type CalendarContext = {
    dayHover: DayHover | false;
    setDayHover: (_value: DayHover | false) => void;
};
export declare type MonthDayInfos = DayOfMonth;
export declare type Translations = typeof translations;
export interface InputElementProps {
    value?: string;
    onClick?: () => any;
}
export declare type HotelCalendarProps = {
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
export declare type CalendarProps = {};
export declare type MonthProps = {
    first: boolean;
    date: Date;
    goToNextMonth: () => any;
    goToPreviousMonth: () => any;
    previousMonth?: Date;
    nextMonth?: Date;
};
export declare type DayProps = MonthDayInfos;
