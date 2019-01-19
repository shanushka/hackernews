import React from 'react';
import axios from 'axios';

import Tab from './Tab';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => {
        res.data.map(result => {
          axios
            .get(
              `https://hacker-news.firebaseio.com/v0/item/${result}.json?print=pretty`
            )
            .then(response => {
              console.log(response.data);
              const newstory = {
                id: response.data.id,
                by: response.data.by,
                type: response.data.type,
                title: response.data.title,
                url: response.data.url,
                commentIdArray: response.data.kids
              };
              this.setState({
                stories: [...this.state.stories, newstory]
              });
            });
        });
      });
  }
  render() {
    const listItems = this.state.stories.map(story => (
      <li  key={story.id}>{story.title}</li>
    ));

    return (
      <div>
        <Tab />
        <div className="stories">
        {listItems}
        </div>
      </div>
    );
  }
}

export default Home;
