/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    appDir: true,
    pagesDir: 'components',
  },
  // Configure rewrites to handle components directory and API proxy
  async rewrites() {
    return [
      {
        source: '/components/:path*',
        destination: '/:path*',
      },
      // Add this new rewrite rule for your API proxy
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', // Proxy to your Express backend
      },
    ]
  },
}

export default nextConfig