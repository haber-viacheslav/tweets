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
import { useState } from 'react';
import { getItem, setItem } from 'helpers/localStorage';
import { uniqueBy } from 'helpers/uniqueBy';

export const TweetItem = ({ user, tweets, followers, avatar, id }) => {
  const initIsFollow = !!getItem('users')
    ? getItem('users').filter(item => item.id === id)
    : false;
  console.log('users', !!getItem('users'));
  console.log('initIsFollow', initIsFollow);

  const [isFollow, setIsFollow] = useState(initIsFollow);
  const [followersCount, setFollowersCount] = useState(followers);
  const handleFollowChange = () => {
    const localUsers = getItem('users');
    if (isFollow) {
      setIsFollow(prevIsFollow => !prevIsFollow);
      setFollowersCount(prevCount => prevCount - 1);
      const updatedUser = {
        user,
        tweets,
        followers: followersCount,
        avatar,
        id,
        isFollow: !isFollow,
      };
      if (!localUsers) {
        return setItem('users', [updatedUser]);
      }
      setItem('users', uniqueBy([updatedUser, ...localUsers], 'id'));
    } else {
      setIsFollow(prevIsFollow => !prevIsFollow);
      setFollowersCount(prevCount => prevCount + 1);
      const updatedUser = {
        user,
        tweets,
        followers: followersCount,
        avatar,
        id,
        isFollow: !isFollow,
      };
      if (!localUsers) {
        return setItem('users', [updatedUser]);
      }
      setItem('users', uniqueBy([updatedUser, ...localUsers], 'id'));
    }
  };

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
        <Followers>{followersCount} Followers</Followers>
        <FollowBtn isFollow={isFollow} onClick={handleFollowChange} />
      </ContentWrp>
    </TweetStyledItem>
  );
};
