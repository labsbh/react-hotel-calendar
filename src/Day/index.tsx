import clsx from 'clsx';
import React, { ReactElement, useCallback, useContext, useRef } from 'react';
import { CalendarCtx, OptionCtx } from '../Store';
import { DayProps, MonthDayInfos } from '../typings';
import { DayWrapper } from './styled';

const Day = (props: DayProps): ReactElement => {
  const {
    date,
    type,
    isValid,
    isToday,
    isDisabled,
    isDayBeforeDisabledDate,
    isStartDate,
    isFirstEnabledDate,
    isNoCheckIn,
    isNoCheckOut,
    isDayOfWeekDisabled,
  } = props;
  const { onDayClick } = useContext(OptionCtx);
  const { setDayHover } =
    useContext(CalendarCtx);
  const classes = clsx({
    [`type-${type}`]: true,
    valid: isValid,
    invalid: !isValid,
    today: isToday,
    disabled: isDisabled,
    'before-disabled-date': isDayBeforeDisabledDate,
    'checkin-only': isStartDate || isFirstEnabledDate,
    'no-checkin': isNoCheckIn,
    'no-checkout': isNoCheckOut,
    'day-of-week-disable': isDayOfWeekDisabled,
    'rhc-day': true,
  });
  const ref = useRef<HTMLTableDataCellElement>(null);

  let isHover = false;

  const handleDayClick = useCallback(
    (day: MonthDayInfos): void => {
      if (!day.isValid) {
        return;
      }
        setDayHover(false);
        onDayClick && onDayClick(day.date);
    },
    [onDayClick, setDayHover],
  );

  const handleDayHover = useCallback(
    (day: MonthDayInfos) => {
      if (!ref) {
        return;
      }
      setDayHover({ ...day, ref });
    },
    [setDayHover],
  );

  return (
    <DayWrapper
      hover={isHover}
      className={classes}
      onClick={(): any => handleDayClick(props)}
      onMouseEnter={(): any => {
        return handleDayHover(props);
      }}
      ref={ref}
    >
      {date.getDate()}
    </DayWrapper>
  );
};

export default Day;
