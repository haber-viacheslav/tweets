import styled from 'styled-components';

export const StyledDescription = styled.p`
  color: ${props => props.theme.colors.buttonBg};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.2;
`;
