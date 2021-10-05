import { addDays, closestTo, differenceInDays, eachDayOfInterval, isAfter, subDays } from 'date-fns';
import _ from 'lodash';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Calendar from '../Calendar';
import { CalendarCtx, defaultOptions, OptionCtx } from '../Store';
import { enTranslations } from '../translations';
import { CalendarContext, DayHover, HotelCalendarProps, OptionContext } from '../typings';
import { theme as defaultTheme, Wrapper } from './styled';

const HotelCalendar = (props: Partial<HotelCalendarProps>): ReactElement => {
    const defaults: HotelCalendarProps = {
        ...defaultOptions,
        disabledDatesBetweenChecks: true,
        theme: defaultTheme,
        i18n: enTranslations,
    };
    const propsWithDefault: HotelCalendarProps = _.defaultsDeep({ ...props }, defaults);
    const {
        theme,
        disabledDatesBetweenChecks,
        disabledDates,
        i18n,
        locale,
        ...contextProps
    } = propsWithDefault;
    const [dayHover, setDayHover] = useState<DayHover | false>(false);

    if (disabledDatesBetweenChecks) {
        contextProps.noCheckInDates
            .sort((a: Date, b: Date) => a.getTime() - b.getTime())
            .forEach((checkIn: Date) => {
                const nextCheckout = closestTo(
                    checkIn,
                    contextProps.noCheckOutDates.filter((date: Date) =>
                        isAfter(date, checkIn),
                    ),
                );
                if (nextCheckout && differenceInDays(nextCheckout, checkIn) > 1) {
                    disabledDates.push(
                        ...eachDayOfInterval({
                            start: addDays(checkIn, 1),
                            end: subDays(nextCheckout, 1),
                        }),
                    );
                }
            });
    }

    const optionContext: OptionContext = {
        ...contextProps,
        disabledDates: disabledDates.sort((a: Date, b: Date) => a.getTime() - b.getTime()),
        locale,
    };

    const {i18n: i18next} = useTranslation();

    const localeCode = i18next.language || 'en';

    const calendarContext: CalendarContext = {
        dayHover,
        setDayHover: (value: DayHover | false): void => setDayHover(value),
    };

    const wrapperRef = useRef<HTMLDivElement>(null);
    const mergedTheme: DefaultTheme = _.defaultsDeep(theme, defaultTheme);

    useEffect(() => {
        i18next.addResourceBundle(localeCode, 'hotelcalendar', i18n);
    }, [localeCode, i18next, i18n]);

    return (

            <ThemeProvider theme={mergedTheme}>
                <OptionCtx.Provider value={optionContext}>
                    <CalendarCtx.Provider value={calendarContext}>
                        <Wrapper ref={wrapperRef}>
                            <Calendar />
                        </Wrapper>
                    </CalendarCtx.Provider>
                </OptionCtx.Provider>
            </ThemeProvider>
    );
};

export default HotelCalendar;
