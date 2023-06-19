import { TweetItem } from 'components/TweetItem/TweetItem';
import { StyledTweetsList } from './TweetsList.styled';
export const TweetsList = ({ tweets, follows, onFollowChange }) => {
  return (
    <StyledTweetsList>
      {tweets.length > 0 &&
        tweets.map(({ id, tweets, followers, avatar, user }) => (
          <TweetItem
            key={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            user={user}
            id={id}
            followed={follows[id] ? follows[id] : false}
            onFollowChange={onFollowChange}
          />
        ))}
    </StyledTweetsList>
  );
};
