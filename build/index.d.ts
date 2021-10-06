import { Locale } from 'date-fns';
import { ReactElement } from 'react';

interface HotelCalendarTheme {
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
declare type TooltipCallback = (hover: Date) => string | ReactElement;
interface InputElementProps {
    value?: string;
    onClick?: () => any;
}
declare type HotelCalendarProps = {
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
    onDayClick: undefined | false | ((_date: Date) => any);
    theme: HotelCalendarTheme;
    disabledDatesBetweenChecks: boolean;
};

declare const HotelCalendar: (props: Partial<HotelCalendarProps>) => ReactElement;

export { HotelCalendar, HotelCalendarProps, HotelCalendarTheme, InputElementProps };
