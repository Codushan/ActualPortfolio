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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
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
  // Add compression and performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Optimize bundle size
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
}

export default nextConfig