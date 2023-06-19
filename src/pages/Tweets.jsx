import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTweets } from 'api/tweetsService';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { getItem, setItem } from 'helpers/localStorage';
import { Loader } from 'components/Loader/Loader';
import { uniqueBy } from 'helpers/uniqueBy';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState('all');
  const [follows, setIsFollows] = useState(() => {
    const localData = getItem('follows');
    if (!localData) {
      return {};
    }
    return localData;
  });
  const [searchParams, setSearchParams] = useSearchParams({});

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(
    () =>
      setSearchParams({
        page: 1,
        limit: 3,
        ...params,
      }),

    [params, setSearchParams]
  );

  useEffect(() => {
    setIsLoading(true);
    const getAllTweets = async () => {
      try {
        const response = await fetchTweets();
        if (response.statusText !== 'OK') {
          return;
        }
        if (searchParams.get('limit')) {
          setTotalPages(
            Math.round(response.data.length / +searchParams.get('limit'))
          );
        }
      } catch (e) {
        setTweets([]);
        setTotalPages(0);
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTweets();
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    const getAllTweets = async params => {
      try {
        const response = await fetchTweets(params);
        if (response.statusText !== 'OK') {
          return;
        }
        setTweets(prevTweets => {
          return params.page === '1'
            ? response.data
            : uniqueBy([...prevTweets, ...response.data], 'id');
        });
      } catch (e) {
        setTweets([]);
        setTotalPages(0);
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTweets(params);
  }, [params, setSearchParams]);

  const handleOnLoad = () => {
    setSearchParams({ ...params, page: +params.page + 1 });
  };
  const onFilterSelect = filter => {
    setFilter(filter);
  };

  const handleFollowChange = id => {
    setIsFollows(prevFollows => {
      return {
        ...prevFollows,
        [id]: prevFollows[id] ? !prevFollows[id] : true,
      };
    });
  };

  const filterTweets = (items, filter) => {
    switch (filter) {
      case 'follow':
        return items.filter(item => follows[item.id] !== true);
      case 'followings':
        return items.filter(item => follows[item.id] === true);
      default:
        return items;
    }
  };

  const visibleTweets = filterTweets(tweets, filter);
  setItem('follows', follows);
  return (
    <Section>
      <Container>
        <Filter onChange={onFilterSelect} filter={filter} />
        {visibleTweets.length > 0 && (
          <TweetsList
            tweets={visibleTweets}
            onFollowChange={handleFollowChange}
            follows={follows}
          />
        )}
      </Container>
      {totalPages > +params.page && <LoadMoreBtn onClick={handleOnLoad} />}
      {isLoading && <Loader />}
    </Section>
  );
};

export default Tweets;
