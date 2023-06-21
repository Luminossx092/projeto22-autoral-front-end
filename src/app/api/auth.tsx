import axios from "axios";

function signUp(body:SignUpBody) {
    return axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
}

function signIn(body:SignInBody) {
    return axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);
}

function returnUser(token) {
    return axios.get(`${process.env.REACT_APP_API_URL}/return-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
const apiAuth = {
    signUp,
    signIn,
    returnUser
}
type SignInBody={
  email: string,
  password: string,
}
type SignUpBody=SignInBody & {
  password: string,
}

export default apiAuth;