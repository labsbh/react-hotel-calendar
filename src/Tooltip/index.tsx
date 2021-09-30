import { format as formatDate } from 'date-fns';
import React, { ReactElement, useContext, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { CalendarCtx, OptionCtx } from '../Store';
import { TooltipWrapper } from './styled';

const Tooltip = (): ReactElement | null => {
  const { t } = useTranslation();
  const { hoveringTooltip: hoveringTooltipOption, format } = useContext(OptionCtx);
  const { dayHover } = useContext(CalendarCtx);
  const [hoveringTooltip] = useState(
    hoveringTooltipOption &&
      !(
        (typeof window !== 'undefined' && 'ontouchstart' in window) ||
        typeof navigator === 'undefined' ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      ),
  );

  if (!hoveringTooltip || !dayHover) {
    return null;
  }

  let top = 0;
  let left = 0;
  if (dayHover.ref.current) {
    const { offsetLeft, offsetTop, offsetWidth } = dayHover.ref.current;
    const parent = dayHover.ref.current.closest('table');
    const { offsetLeft: parentLeft, offsetTop: parentTop } = parent || {
      offsetLeft: 0,
      offsetTop: 0,
    };
    top = parentTop + offsetTop;
    left = parentLeft + offsetLeft + offsetWidth / 2;
  }

  let tooltipContent = null;

  if (typeof hoveringTooltipOption === 'function') {
     tooltipContent = hoveringTooltipOption(dayHover.date);
  } else {

    if (dayHover.isNoCheckIn) {
      tooltipContent = <Trans t={t} values={{date: formatDate(dayHover.date, format)}}>no_checkin</Trans>;
    } else if (dayHover.isDisabled) {
      tooltipContent = <Trans t={t} values={{date: formatDate(dayHover.date, format)}}>not_available</Trans>;
    }
  }

  if (null === tooltipContent) {
    return null;
  }

  return (
    <TooltipWrapper style={{ left, top }}>
      {tooltipContent}
    </TooltipWrapper>
  );
};

export default Tooltip;
