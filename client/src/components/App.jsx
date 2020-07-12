import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Twetch from '@twetch/sdk';

import Nav from './Nav';
import Home from './Home';
import Feed from './Feed';

const Container = styled.div`
  width: 375px;
  height: 812px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(104.06deg, #E9EDF0 0.61%, #E9EDF0 100%);
  overflow: hidden;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchData = this.fetchData.bind();
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData() {
    const response = window.myTwetch.query(`
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
    .then((response) => {
      console.log('answer: ' , response);
    });
  }

  render() {
    return (
      <Router>
        <Container>
          {/* <Nav /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/feed" component={Feed} />
            {/* <Route path="/profile" component={Profile} /> */}
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
