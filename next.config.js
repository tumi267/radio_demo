/** @type {import('next').NextConfig} */
const nextConfig = {
    // Required for YouTube integration
    images: {
      domains: [
        'plus.unsplash.com', 
        'unsplash.com',
        'images.unsplash.com',
        'media.istockphoto.com'
      ],
    },
    
 
  };
  
  module.exports = nextConfig;
  
  
  
