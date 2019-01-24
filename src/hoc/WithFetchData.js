import React from 'react';
import axios from 'axios';

import { URL_BASE, URL_ITEM } from '../constants/Common';
import { getTimeDifference } from '../utils/getTimeDifference';

const WithFetchData = story => WrappedComponent => {
  return class DataFetch extends React.Component {
    constructor() {
      super();

      this.state = {
        stories: [],
        isLoading: false,
        isMounted: false
      };
    }

    componentDidMount() {
      this.getDataFromApi();
      this.setState({ isLoading: true, isMounted: true });
    }

    componentWillUnmount() {
      this.setState({ isMounted: false });
    }

    getDataFromApi = () => {
      axios.get(`${URL_BASE}${story}.json`).then(res => {
        res.data.forEach(result => {
          axios
            .get(`${URL_ITEM}${result}.json`)
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
              if (this.state.isMounted) {
                this.setState({
                  stories: [...this.state.stories, newstory],
                  isLoading: false
                });
              }
            })
            .catch(error => {
              return error;
            });
        });
      })
      .catch(error => {
        return error;
      });
    };

    render() {
      return (
        <WrappedComponent
          stories={this.state.stories}
          getDataFromApi={this.getDataFromApi}
          isLoading={this.state.isLoading}
        />
      );
    }
  };
};

export default WithFetchData;
