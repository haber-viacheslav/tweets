import styled from 'styled-components';

export const StyledTweetsList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 40px;
  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 26px;
    margin-bottom: 40px;
  }
`;
