import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import { graphql, compose } from 'react-apollo';
import { login } from '../queries';
import { withRouter } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
        this.doSignUp();
    }
    // Kakao Login
    responseKakao = (res) => {
        console.log(res)
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        });
        this.doSignUp();
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }
    
    // Login Mutation
    doSignUp = async () => {
        const { id, name, provider } = this.state;
        const user = await this.props.LoginMutation({
            variables: {
                id: String(id),
                name,
                provider
            }
        });
        if(user.data.login) {
            window.sessionStorage.setItem('id', id);
            window.sessionStorage.setItem('name', user.data.login.name);
            window.sessionStorage.setItem('provider', provider);
            this.props.onLogin();
            this.props.history.push('/');
        }
        else
            alert("로그인에 실패하셨습니다.");
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={process.env.REACT_APP_Google}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
                <KakaoButton
                    jsKey={process.env.REACT_APP_Kakao}
                    buttonText="Kakao"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const KakaoButton = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export default compose(
    graphql(login, { name: 'LoginMutation'})
)(withRouter(Login));
