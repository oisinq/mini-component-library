/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': "4px",
    '--outer-height': '24px'
  },
  medium: {
    '--padding': 0,
    '--outer-height': '12px'
  },
  small: {
    '--padding': 0,
    '--outer-height': '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <BarWrapper
    size={size}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={styles}>
    <InnerProgressBar percentage={value}>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </InnerProgressBar>
  </BarWrapper>;
};

export default ProgressBar;

const BarWrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  height: var(--outer-height);
  padding: var(--padding);
  overflow: hidden;
`;

const InnerProgressBar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
  border-radius: 4px 0px 0px 4px;
`;