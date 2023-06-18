import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 160px;
  height: 30px;
  border-radius: 10.3108px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.colors.mainGrey};
  background-color: ${props => props.theme.colors.buttonBg};
  transition: box-shadow, background-color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.buttonActiveBg};
  }
`;
