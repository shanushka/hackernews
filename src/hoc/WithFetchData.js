import React from 'react';
import axios from 'axios';

import { URL_BASE, URL_ITEM, NEWS_PER_PAGE } from '../constants/Common';
import { getTimeDifference } from '../utils/getTimeDifference';

const WithFetchData = story => WrappedComponent => {
  return class DataFetch extends React.Component {
      constructor() {
      super();

      this.state = {
        stories: [],
        isLoading: false,
        currentPage: 1,
        noOfMaxPage:'',
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
      const indexOfLastNews = this.state.currentPage * NEWS_PER_PAGE;
      const indexOfFirstNews = indexOfLastNews - NEWS_PER_PAGE;
      axios.get(`${URL_BASE}${story}.json`).then(res => {      
        this.setState({
          noOfMaxPage:Math.ceil(res.data.length/NEWS_PER_PAGE)
        })
        for (let i = indexOfFirstNews; i < indexOfLastNews ; i++) {
          axios
            .get(`${URL_ITEM}${res.data[i]}.json`)
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
        }
      });
    };

    onPreviousClick = () => {
      this.setState(
        {
          stories: [],
          currentPage: this.state.currentPage - 1
        },
        () => {
          this.getDataFromApi();
        }
      );
    };

    onNextClick = () => {
      this.setState(
        {
          stories: [],
          currentPage: this.state.currentPage + 1
        },
        () => {
          this.getDataFromApi();
        }
      );
    };

    render() {
      return (    
          <WrappedComponent
            onPreviousClick = { this.onPreviousClick}
            onNextClick = { this.onNextClick}
            nextPage = {this.state.noOfMaxPage}
            currentPage ={this.state.currentPage}
            stories={this.state.stories}
            getDataFromApi={this.getDataFromApi}
            isLoading={this.state.isLoading}
          />
      );
    }
  };
};

export default WithFetchData;
