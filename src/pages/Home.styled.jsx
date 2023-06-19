import styled from 'styled-components';
import hero from 'images/hero.webp';
export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const DescriptionItem = styled.li``;

export const BgWrapper = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center -70px;
  background-size: 100%;
  background-image: url(${hero});
`;
