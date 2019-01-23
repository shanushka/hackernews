import axios from 'axios';
const getCommentsByApi = id => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(res => {
      return res.data
    });
};

export { getCommentsByApi };
