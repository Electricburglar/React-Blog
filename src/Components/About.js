import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
  render() {
    return (
      <Container>
            <Title>React로 블로그 만들기</Title>
            <hr style={{width: '50%'}}/>
            <p>
            React | GraphQL | Apollo | MongoDB | Styled-Components
            </p>
            <p>
            Web : https://electricburglar.tistory.com/146<br/>
            GitHub : https://github.com/Electricburglar/React-Blog
            </p>
            <hr style={{width: '50%'}}/>
            React Blog ©2018 Created by Eunju
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  justify-content: center;
  width: 1080px;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;
`

export default About;
