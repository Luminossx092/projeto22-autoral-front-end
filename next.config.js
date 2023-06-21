/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API_URL: 'http://localhost:5000',
  },
  /* async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*'
      }
    ]
  } */
}

module.exports = nextConfig
