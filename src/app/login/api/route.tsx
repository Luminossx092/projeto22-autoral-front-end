import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/sign-in`, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
  console.log("data from get in login api: ", data)
  return NextResponse.json({ data })
}
 

/* function signUp(body) {
    return axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
}

function singIn(body) {
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
    singIn,
    returnUser
} */
/* export default apiAuth; */