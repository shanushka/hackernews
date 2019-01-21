import React from 'react';
import axios from 'axios';

import { getTimeDifference } from '../utils/getTimeDifference';

const WithFetchData = story => WrappedComponent => {
  return class DataFetch extends React.Component {
    constructor() {
      super();

      this.state = {
        stories: []
      };
    }

    componentDidMount() {
      this.getDataFromApi();

      this.mounted = true;
    }
    componentWillUnmount() {
      this.mounted = false;
    }

    getDataFromApi = () => {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/${story}.json?print=pretty`)
        .then(res => {
          res.data.forEach(result => {
            axios
              .get(
                `https://hacker-news.firebaseio.com/v0/item/${result}.json?print=pretty`
              )
              .then(response => {
                const newstory = {
                  id: response.data.id,
                  by: response.data.by,
                  type: response.data.type,
                  title: response.data.title,
                  url: response.data.url,
                  points: response.data.score,
                  commentIdArray: response.data.kids,
                  time: getTimeDifference(response.data.time)
                };
                if (this.mounted) {
                  this.setState({
                    stories: [...this.state.stories, newstory]
                  });
                }
              });
          });
        });
    };

    render() {
      return (
        <WrappedComponent
          stories={this.state.stories}
          getDataFromApi={this.getDataFromApi}
        />
      );
    }
  };
};

export default WithFetchData;
