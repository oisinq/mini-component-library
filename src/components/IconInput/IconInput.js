import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    "--font-size": "14px",
    "--border-size": "1px",
    "--input-padding": "28px"
  },
  large: {
    "--font-size": "18px",
    "--border-size": "2px",
    "--input-padding": "32px"
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size];

  return (
    <Wrapper style={{ "--width": width + "px", ...style }}>
      <IconWrapper>
        <StyledIcon id={icon} strokeWidth={size === "large" ? 2 : 1} size={size === "large" ? 24 : 20} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </IconWrapper>
      <Input placeholder={placeholder} />
    </Wrapper>);
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--border-size) solid black;
  width: var(--width);
  line-height: 21px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 8px;
  padding-left: var(--input-padding);
  font-size: var(--font-size);
  font-weight: 600;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
    padding-left: 92px;
    opacity: 1;
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    color: black;
  }
`;

const StyledIcon = styled(Icon)`
  height: 100%;
  color: ${COLORS.gray700};
  padding: 2px;

  ${Wrapper}:hover & {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
