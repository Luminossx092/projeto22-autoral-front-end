import { NextResponse } from "next/server";

export async function POST(body) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body,
  })

  const data = await res.json()
  console.log(data);
  return NextResponse.json(data)
}