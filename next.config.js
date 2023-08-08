/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/nkped/mdx-blogposts/main/images/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig

/* 
Include following when using images from remote sources:
NB ** at end of pathname reads any pathname

  images: {
    remotePatterns: [ literal config ]
      
      
      */