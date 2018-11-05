import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        const { logged, onLogout } = this.props;

        return (
            <Container>
                <Element>
                    {logged ?
                    <><WelcomeMsg>{window.sessionStorage.getItem('name')}님 반갑습니다.</WelcomeMsg>
                    <ShortCut><Link to="/" onClick={onLogout}>로그아웃</Link></ShortCut></> : 
                    <>
                    <WelcomeMsg>React Blog에 오신 걸 환영합니다.</WelcomeMsg>
                    <ShortCut><Link to="/login">로그인/회원가입</Link></ShortCut></>}
                    <Logo>
                        <img
                            width="100%"
                            height="100%"
                            src="https://t1.daumcdn.net/cfile/tistory/99CD014B5BD01FA412"
                            alt="logo"/>
                    </Logo>
                    <Search>
                        <Link to="/" style={{textDecoration: 'none', color:'#274046'}}>
                            <h1>React Blog</h1>
                        </Link>
                    </Search>
                </Element>
            </Container>
        );
    }
}
  
export default Header;

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const WelcomeMsg = styled.div`
    order: 1;
    width: 200px;
    height: 20px;
    text-align: left;
` 

const ShortCut = styled.div`
    order: 2;
    width: 880px;
    height: 20px;
    text-align: right;
`

const Logo = styled.div`
    order: 3;
    width: 200px;
    height: 80px;
`

const Search = styled.div`
    order: 4;
    width: 880px;
    background: #1FA2FF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    
    text-align: center;
`