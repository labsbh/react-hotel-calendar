import clsx from 'clsx';
import { addMonths, differenceInCalendarMonths, startOfMonth, subMonths, } from 'date-fns';
import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { useIntersectionObserverRef } from 'rooks';
import Month from '../Month';
import { OptionCtx } from '../Store';
import Tooltip from '../Tooltip';
import { DatePickerInner, Months, Wrapper } from './styled';

const Calendar = (): ReactElement => {
    const [laptop, setLaptop] = useState(false);
    const [secondMonthRef] = useIntersectionObserverRef((entries) => {
        if (entries && entries[0]) {
            setLaptop(entries[0].isIntersecting);
        }
    });

    const { startDate, endDate, moveBothMonths } =
        useContext(OptionCtx);

    const [firstMonth, setFirstMonth] = useState<Date>(startDate ? startDate : new Date());
    const [secondMonth, setSecondMonth] = useState<Date>(addMonths(startDate ? startDate : new Date(), 1));
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        let defaultStart = new Date();
        let defaultEnd = new Date();
        if (startDate && differenceInCalendarMonths(defaultStart, startDate) < 0) {
            defaultStart = new Date(startDate.getTime());
        }

        if (
            endDate &&
            differenceInCalendarMonths(addMonths(defaultEnd, 1), endDate) > 0
        ) {
            defaultEnd = new Date(subMonths(endDate, 1));
        }

        setFirstMonth(defaultStart);
        setSecondMonth(addMonths(defaultEnd, 1));
    }, [startDate, endDate]);

    useEffect(() => {
        if (startOfMonth(firstMonth) >= startOfMonth(secondMonth)) {
            setSecondMonth(addMonths(firstMonth, 1));
        }
    }, [firstMonth, secondMonth]);

    useEffect(() => {
        setIsRender(true);
    }, []);

    const classes = clsx({ rendered: isRender });

    return (
        <React.Fragment>
            <Wrapper className={classes}>
                <DatePickerInner>
                    <Months>
                        <Month
                            first
                            date={firstMonth}
                            nextMonth={laptop ? secondMonth : undefined}
                            goToPreviousMonth={(): void => {
                                setFirstMonth(subMonths(firstMonth, 1));
                                if (moveBothMonths) {
                                    setSecondMonth(subMonths(secondMonth, 1));
                                }
                            }}
                            goToNextMonth={(): void => {
                                setFirstMonth(addMonths(firstMonth, 1));
                                if (moveBothMonths) {
                                    setSecondMonth(addMonths(secondMonth, 1));
                                }
                            }}
                        />
                        <Month
                            first={false}
                            date={secondMonth}
                            previousMonth={firstMonth}
                            goToPreviousMonth={(): void => {
                                setSecondMonth(subMonths(secondMonth, 1));
                                if (moveBothMonths) {
                                    setFirstMonth(subMonths(firstMonth, 1));
                                }
                            }}
                            goToNextMonth={(): void => {
                                setSecondMonth(addMonths(secondMonth, 1));
                                if (moveBothMonths) {
                                    setFirstMonth(addMonths(firstMonth, 1));
                                }
                            }}
                            ref={secondMonthRef}
                        />
                        <Tooltip />
                    </Months>
                </DatePickerInner>
            </Wrapper>
        </React.Fragment>
    );
};

export default Calendar;
