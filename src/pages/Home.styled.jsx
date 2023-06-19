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
  height: 93vh;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(${hero});
`;

export const Wrapper = styled.div`
  border-radius: 10px;
  padding: 30px 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #683eff;
  margin-bottom: 20px;
`;
