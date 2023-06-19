import goitLogo from 'images/goit-logo.svg';
import content from 'images/content.webp';
import {
  TweetStyledItem,
  ImageWrp,
  ContentWrp,
  Avatar,
  Tweets,
  Followers,
  TweetImage,
  TweetLogo,
  AvatarWrp,
} from './TweetItem.styled';
import { FollowBtn } from 'components/FollowBtn/FollowBtn';

export const TweetItem = ({
  user,
  tweets,
  followers,
  avatar,
  id,
  followed,
  onFollowChange,
}) => {
  const followersCount = followed ? followers + 1 : followers - 1;

  return (
    <TweetStyledItem>
      <ImageWrp>
        <TweetLogo
          src={goitLogo}
          alt="goit"
          width="76"
          height="22"
          loading="lazy"
        />
        <TweetImage src={content} alt="tweetImage" width="308" loading="lazy" />
      </ImageWrp>
      <ContentWrp>
        <AvatarWrp>
          <Avatar src={avatar} alt={user} width="80" loading="lazy" />
        </AvatarWrp>

        <Tweets>{tweets} Tweets</Tweets>
        <Followers>
          {followersCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          Followers
        </Followers>
        <FollowBtn isFollow={followed} onClick={() => onFollowChange(id)} />
      </ContentWrp>
    </TweetStyledItem>
  );
};
