import axios from 'axios';
axios.defaults.baseURL = 'https://648ad79917f1536d65e9cc70.mockapi.io';
export const fetchTweets = async (params, options) => {
  const response = await axios.get('/tweets', {
    params,
    options,
  });
  return response;
};
