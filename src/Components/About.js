import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
  render() {
    return (
      <Container>
          <h2>React로 블로그 만들기</h2>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex
`

export default About;
