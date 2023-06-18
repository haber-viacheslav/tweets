import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTweets } from 'api/tweetsService';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { getItem, setItem } from 'helpers/localStorage';
import { uniqueBy } from 'helpers/uniqueBy';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const [tweets, setTweets] = useState(getItem('users') || []);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 3,
  });

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
          console.log('Total', totalPages);
        }
      } catch (e) {
        setTweets([]);
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTweets();
  }, []);

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
  const filterTweets = (items, filter) => {
    switch (filter) {
      case 'follow':
        return items.filter(item => !item.follow);
      case 'followings':
        return items.filter(item => item.follow);
      default:
        return items;
    }
  };
  const visibleTweets = filterTweets(tweets, filter);

  return (
    <section>
      <Container>
        <Filter onClick={onFilterSelect} />
        {visibleTweets.length > 0 && <TweetsList tweets={visibleTweets} />}
      </Container>
      {totalPages > +params.page && <LoadMoreBtn onClick={handleOnLoad} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default Tweets;
