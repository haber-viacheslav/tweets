export const TweetItem = ({ user, tweets, followers, avatar, id }) => {
  return (
    <li>
      <div>
        <svg>
          <use></use>
        </svg>
      </div>
      <div>
        <h3>${tweets} Tweets</h3>
        <p>${followers} Followers</p>
        <button type="button"></button>
      </div>
    </li>
  );
};
