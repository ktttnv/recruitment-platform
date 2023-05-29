const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreDevErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // TODO nanov94: move to variables
        destination: `http://localhost:3000/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
