import styled from 'styled-components';

export const TweetStyledItem = styled.li`
  height: 460px;
  width: 380px;
  background: ${props => props.theme.colors.cardBg};
  box-shadow: ${props => props.theme.shadows.cartShadow};
  border-radius: 20px;
`;

export const ImageWrp = styled.div`
  position: relative;
  height: 214px;
  width: 100%;
  padding: 28px 36px 18px;
`;
export const TweetLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const TweetImage = styled.img`
  width: 100%;
`;
export const ContentWrp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 62px 83px 36px;
  width: 100%;
  position: relative;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.buttonBg};
    box-shadow: ${props => props.theme.shadows.dividerShadow};
  }
`;
export const Avatar = styled.img``;
export const AvatarWrp = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border: 8px solid ${props => props.theme.colors.buttonBg};
  width: 80px;
  height: 80px;
  border-radius: 85.9232px;
  box-shadow: ${props => props.theme.shadows.avatarShadow};
`;
export const Tweets = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${props => props.theme.colors.buttonBg};
  margin-bottom: 16px;
`;
export const Followers = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${props => props.theme.colors.buttonBg};
  margin-bottom: 26px;
`;
