import { addMonths, format as formatDate, isSameMonth, subMonths, } from 'date-fns';
import React, { forwardRef, ReactElement, useCallback, useContext } from 'react';
import MonthDay from '../Day';
import { useDays } from '../Month/hooks';
import { OptionCtx } from '../Store';
import { MonthProps } from '../typings';
import { Caption, MonthName, MonthTable, NavButton, WeekDayName, WeekDays, } from './styled';

const Month = forwardRef<HTMLTableElement, MonthProps>(({
    first,
    date,
    goToNextMonth,
    goToPreviousMonth,
    nextMonth,
    previousMonth,
}, ref): ReactElement => {
    const { locale, endDate, startDate, moveBothMonths } = useContext(OptionCtx);
    const days = useDays(date);

    const getWeekDayNames = useCallback(
        () =>
            Array.from(Array(7).keys()).map((day) => (
                <WeekDayName key={`day-name-${day}`} className="rhc-weekday-name">
                    {locale.localize?.day(
                        (day + (locale.options?.weekStartsOn || 0)) % 7,
                        {
                            width: 'abbreviated',
                        },
                    )}
                </WeekDayName>
            )),
        [locale],
    );

    const getMonthName = useCallback(
        (date: Date) =>
            date ? `${formatDate(date, 'LLLL yyyy', { locale })}` : '',
        [locale],
    );

    const isMonthOutOfRange = useCallback(
        (month: Date): boolean => {
            const isSameAsPrevious =
                undefined === previousMonth || !isSameMonth(previousMonth, month);
            const isSameAsNext =
                undefined === nextMonth || !isSameMonth(nextMonth, month);
            return (
                (startDate &&
                    new Date(month.getFullYear(), month.getMonth() + 1, 0, 23, 59, 59) <
                    startDate) ||
                (endDate &&
                    new Date(month.getFullYear(), month.getMonth(), 1) > endDate) ||
                !isSameAsPrevious ||
                !isSameAsNext
            );
        },
        [startDate, endDate, previousMonth, nextMonth],
    );

    const showPrevious =
        moveBothMonths && (undefined !== previousMonth || undefined !== nextMonth)
            ? first && !isMonthOutOfRange(subMonths(date, 1))
            : !isMonthOutOfRange(subMonths(date, 1));
    const showNext =
        moveBothMonths && (undefined !== previousMonth || undefined !== nextMonth)
            ? !first && !isMonthOutOfRange(addMonths(date, 1))
            : !isMonthOutOfRange(addMonths(date, 1));

    return (
        <MonthTable first={first} ref={ref}>
            <thead>
            <Caption>
                <th>
                    {showPrevious && (
                        <NavButton onClick={goToPreviousMonth} className="rhc-previous-btn">&lt;</NavButton>
                    )}
                </th>
                <MonthName colSpan={5} className="rhc-month-name">{getMonthName(date)}</MonthName>
                <th>
                    {showNext && <NavButton onClick={goToNextMonth} className="rhc-next-btn">&gt;</NavButton>}
                </th>
            </Caption>
            <WeekDays className="rhc-weekdays">{getWeekDayNames()}</WeekDays>
            </thead>
            <tbody>
            {date &&
            Array.from(Array(6).keys()).map((week): ReactElement | null => {
                if (
                    undefined === days[week * 7] ||
                    days[week * 7].type === 'nextMonth'
                ) {
                    return null;
                }

                return (
                    <tr key={`week-${week}`}>
                        {Array.from(Array(7).keys()).map((weekDay) => {
                            const day =
                                days[
                                week * 7 + (weekDay + (locale.options?.weekStartsOn || 0))
                                    ];

                            return <MonthDay key={`${week}-${weekDay}`} {...day} />;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </MonthTable>
    );
});

export default Month;
