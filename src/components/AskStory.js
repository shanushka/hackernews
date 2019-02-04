import React from 'react';

import StoryWrapper from './StoryWrapper';
import WithFetchData from '../hoc/WithFetchData';

const AskStory = props => {
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

export default WithFetchData('askstories')(AskStory);
