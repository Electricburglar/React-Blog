import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
      </Layout>
    );
  }
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export default App;