import styled from 'styled-components';

export const FollowStyledBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${props => props.theme.colors.mainGrey};
  background-color: ${props => {
    return props.isFollow
      ? props.theme.colors.buttonActiveBg
      : props.theme.colors.buttonBg;
  }};
  transition: box-shadow, background-color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.theme.shadows.buttonShadow};
  :hover {
    background-color: ${props => props.theme.colors.buttonActiveBg};
    box-shadow: ${props => props.theme.shadows.buttonShadow};
  }
`;
