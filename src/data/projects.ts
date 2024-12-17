export const projects = [
  {
    title: 'Pack & Go',
    description: 'Developed a responsive trip suggestion platform using Gemini AI. Integrated Google services for authentication, location search, and image generation. Optimized performance with Lazy Loading and ShimmerUI.',
    image: 'https://raw.githubusercontent.com/Guheshp/microservices/refs/heads/main/photo-1469854523086-cc02fe5d8800.jpeg',
    tags: ['React', 'Redux', 'TailwindCSS', 'Firebase', 'Google Cloud', 'Gemini AI'],
    github: 'https://github.com/Guheshp/pack-go',
    demo: 'https://pack-go-ashen.vercel.app/',
    features: [
      'Developed a responsive trip suggestion platform using Gemini AI for personalized recommendations.',
      'Implemented Google Authentication for secure user login and Firestore for real-time data storage.',
      'Integrated Google Places Autocomplete and Google API for dynamic location search and image generation.',
      'Optimized application performance with Lazy Loading and ShimmerUI, improving load times by 30%.',
      'Utilized Redux for state management, reducing unnecessary re-renders and enhancing scalability by 40%.'
    ],
    challenges: 'Integrating multiple APIs while maintaining a smooth user experience was challenging. We implemented a robust caching strategy and error handling system to ensure reliability.'
  },
  {
    title: 'Dev-Tinder',
    description: 'Enhanced Performance & User Engagement with 30% reduction in load time. Implemented secure authentication & session management with JWT and cookies. Optimized code with memoization and SOLID principles.',
    image: 'https://raw.githubusercontent.com/Guheshp/microservices/refs/heads/main/photo-1522071820081-009f0129c71c.jpeg',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Tailwind CSS', 'JWT', 'Firebase'],
    github: 'https://github.com/Guheshp/client-devTinder',
    demo: 'https://www.linkedin.com/posts/guheshp_namastenode-javascript-javascriptdeveloper-activity-7254726263188131840-9ryI?utm_source=share&utm_medium=member_desktop',
    features: [
      'Advanced user authentication with JWT and refresh tokens',
      'Responsive design with Tailwind CSS',
      'Profile customization with image upload',
      'Enhanced Performance & User Engagement: Achieved a 30% reduction in load time with lazy loading and shimmer UI, utilizing encryption, SOLID principles, and custom hooks. Added offline status, toast notifications, and multi-theme support for improved user experience.',
  'Secure Authentication & Session Management: Implemented JWT for secure user authentication and cookies for session management, boosting scalability by 50% through various optimizations.',
  'Optimized Code & Scalability: Minimized re-renders with memoization, followed SOLID principles for maintainability, and developed custom hooks for better code organization and modularity.'
    ],
    challenges: 'One of the main challenges was implementing real-time features while maintaining optimal performance. We solved this by implementing  connection pooling and message queuing for better scalability.'
  },
  {
    title: 'YouTube Clone',
    description: 'Enhanced search functionality with debouncing and API polling. Improved load times by 30% with lazy loading and Skeleton UI. Utilized Redux for caching search results, improving responsiveness by 40%.',
    image: 'https://raw.githubusercontent.com/Guheshp/microservices/refs/heads/main/photo-1611162616475-46b635cb6868.jpeg',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Firebase', 'Skeleton UI'],
    github: 'https://github.com/Guheshp/YouTube-',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7256552914771443712/',
    features: [
      'Advanced search with debouncing',
      'Infinite scroll with virtualization',
      'Utilized API polling to refresh video content at regular intervals',
      'Video player with custom controls',
      'Comment system with nested replies',
      'Dark mode support'
    ],
    challenges: 'Performance optimization was crucial for  API polling and  handling large video lists. We implemented virtualization and lazy loading to significantly improve the scroll performance and initial load time.'
  },
  
];