import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from './Nav';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      myProfile: {},
    };
  }

  componentDidMount() {
    window.myTwetch.query(`
    {
      userById(id: "4") {
        id
        name
        icon
      }
    }
    `)
    .then((response1) => {
      this.setState({ myProfile: response1.userById});
    });
    window.myTwetch.query(`
    query MyQuery {
      allPosts(orderBy: CREATED_AT_ASC, last: 10) {
        edges {
          node {
            bContentType
            bContent
            userId
          }
        }
      }
    }
    `)
    .then((response2) => {
      // console.log('Data: ', response2.allPosts.edges);
      this.setState({ posts: response.allPosts.edges});
    });
  }

  render() {
    return(
      <div>
        <Nav icon={this.state.myProfile.icon} />
        <h1>feeed</h1>
      </div>
    )
  }
}

export default Feed;
