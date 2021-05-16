import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <PresentationalSelect>
        {displayedValue}
        <IconWrapper style={{ '--size': "24px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: max-content;
`;


const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
 background-color: ${COLORS.transparentGray15};
 padding: 16px 12px;
 border-radius: 8px;
 font-size: 1rem;
 padding-right: 50px;
 color: ${COLORS.gray700};

${HiddenSelect}:focus + & {
   outline: 1px dotted #212121;
 }

 ${HiddenSelect}:hover + & {
   color: ${COLORS.black};
 }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  z-index: -1;
`;

export default Select;