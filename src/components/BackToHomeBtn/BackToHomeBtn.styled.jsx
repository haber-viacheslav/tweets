import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledBackToHomeBtn = styled(Link)`
  border-radius: 50%;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: #ffffff;
  box-shadow: 2px 2px 3px #240099;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #599bff;
    transform: scale(1.1);
    box-shadow: 2px 4px 6px #0925fa;
  }
`;
