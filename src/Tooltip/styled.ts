import styled from 'styled-components';

const TooltipWrapper = styled.div`
  background-color: ${(props): string => props.theme.tooltip.backgroundColor};
  border-radius: ${(props): string => props.theme.tooltip.borderRadius};
  color: ${(props): string => props.theme.tooltip.textColor};
  font-size: ${(props): string => props.theme.tooltip.fontSize};
  margin-top: -5px;
  padding: ${(props): string => props.theme.tooltip.padding};
  position: absolute;
  transform: translateY(-100%) translateX(-50%);
  white-space: nowrap;

  &:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid
      ${(props): string => props.theme.tooltip.backgroundColor};
    bottom: -4px;
    content: '';
    left: 50%;
    margin-left: -4px;
    position: absolute;
  }
`;

export { TooltipWrapper };
