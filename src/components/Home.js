import React from 'react';

import WithFetchData from '../hoc/WithFetchData';
import StoryWrapper from '../components/StoryWrapper';

const Home = props => {
  return (
    <StoryWrapper
      stories={props.stories}
      onPreviousClick={props.onPreviousClick}
      onNextPreviousClick={props.onNextPreviousClick}
      noOfMaxPage={props.noOfMaxPage}
      currentPage={props.currentPage}
    />
  );
};

export default WithFetchData('topstories')(Home);
