import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                name: '',
            }
        }
    }

    render() {
        const responseGoogle = (res) => {
            console.log(res);
        }
        const responseKakao = (res) => {
            console.log(res)
        }
        return (
            <Container>
                <GoogleLogin
                    clientId="481852525710-e38o22ih7kkf57cnhnmamh27rhskol0g.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                <KakaoButton
                    jsKey="16e3543994b4074741035202c0a2e56b"
                    buttonText="Kakao"
                    onSuccess={responseKakao}
                    onFailure={responseKakao}
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
    text-align: center;
`

export default Login;
