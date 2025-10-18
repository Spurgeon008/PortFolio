import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'johnspurgeon820@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi John, I am reaching out to you because...',

    oldPortfolio: 'https://www.johnspurgeon.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/johnspurgeon',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Spurgeon008/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/john-spurgeon-k/' },
    { name: 'leetcode', url: 'https://leetcode.com/u/Spurgeon08/' },
    { name: 'x', url: 'https://x.com/JSpurgeon7014' },
];

export const MY_STACK = {
    'Programming Languages': [
        {
            name: 'C',
            icon: '/logo/C_Programming_Language.svg.png',
        },
        {
            name: 'C++',
            icon: '/logo/C++.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
    ],
    'Frontend Technologies': [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'HTML',
            icon: '/logo/HTML5-Logo-PNG-Symbol-for-Web-Development-Transparent.png',
        },
        {
            name: 'CSS',
            icon: '/logo/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent.png',
        },
    ],
    'Backend Frameworks': [
        {
            name: 'Django',
            icon: '/logo/django.png',
        },
        {
            name: 'Django REST Framework',
            icon: '/logo/drf.png',
        },
    ],
    'Databases': [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'SQLite',
            icon: '/logo/SQLLITE.png',
        },
        {
            name: 'PostgreSQL (Basic)',
            icon: '/logo/postgreSQL.png',
        },
    ],
    'DevOps & Tools': [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Postman',
            icon: '/logo/Postman.png',
        },
        {
            name: 'Shell Scripting',
            icon: '/logo/Bash.png',
        },
    ],
    'Cloud Platforms': [
        {
            name: 'AWS (Basic)',
            icon: '/logo/aws.png',
        },
        {
            name: 'Azure',
            icon: '/logo/Azure.png',
        },
        {
            name: 'OCI',
            icon: '/logo/OCI.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'E-Commerce Platform',
        slug: 'ecommerce-platform',
        liveUrl: 'https://johnspurgeon-ecommerce.vercel.app/',
        year: 2024,
        description: `
      A comprehensive e-commerce platform built with modern web technologies to provide seamless shopping experience. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>� Shopping Cart: Advanced cart management with persistent storage</li>
        <li>💳 Payment Integration: Secure payment processing with Stripe</li>
        <li>📱 Responsive Design: Mobile-first approach with excellent UX</li>
        <li>� Search & Filter: Advanced product search and filtering system</li>
        <li>� User Authentication: Complete user management system</li>
        <li>📊 Admin Dashboard: Comprehensive admin panel for inventory management</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented real-time inventory tracking</li>
        <li>Built scalable REST API with Node.js and Express</li>
        <li>Integrated Redis for session management and caching</li>
        <li>Used MongoDB for flexible data storage</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Led the complete development process:
      <ul>
        <li>⚙️ Backend: Built robust API with Node.js, Express, and MongoDB</li>
        <li>🎨 Frontend: Developed responsive UI with React and Tailwind CSS</li>
        <li>� Payment: Integrated Stripe for secure payment processing</li>
        <li>� Security: Implemented JWT authentication and authorization</li>
        <li>🚀 Deployment: Configured CI/CD pipeline with Docker and AWS</li>
        <li>📊 Analytics: Added Google Analytics for user behavior tracking</li>
      </ul>
      `,
        techStack: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Tailwind CSS',
            'Stripe',
            'JWT',
            'AWS',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
    },
    {
        title: 'Task Management App',
        slug: 'task-management',
        techStack: [
            'React',
            'TypeScript',
            'Redux Toolkit',
            'Material-UI',
            'Node.js',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        liveUrl: 'https://johnspurgeon-tasks.netlify.app/',
        sourceCode: 'https://github.com/johnspurgeon/task-management',
        year: 2024,
        description: `A comprehensive task management application designed to boost productivity and team collaboration. Features real-time updates, drag-and-drop functionality, and advanced project management capabilities.`,
        role: `As the lead developer, I: <br/>
        - Architected the application using React, TypeScript, and Redux Toolkit.<br/>
        - Implemented real-time collaboration features using Socket.io.<br/>
        - Built a responsive design system with Material-UI components.<br/>
        - Developed RESTful APIs with Node.js and PostgreSQL database.`,
    },
    {
        title: 'Portfolio Dashboard',
        slug: 'portfolio-dashboard',
        techStack: [
            'Next.js',
            'React',
            'Chart.js',
            'Tailwind CSS',
            'Firebase',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://johnspurgeon-dashboard.vercel.app/',
        sourceCode: 'https://github.com/johnspurgeon/portfolio-dashboard',
        year: 2023,
        description:
            'A modern dashboard application for tracking personal projects, skills development, and career progress. Built with Next.js and Firebase, featuring real-time data visualization and responsive design.',
        role: `As the sole developer, I:<br/>
        - Designed and developed the entire application using Next.js and React.<br/>
        - Integrated Firebase for real-time database and authentication.<br/>
        - Created interactive charts and data visualizations with Chart.js.<br/>
        - Implemented responsive design with Tailwind CSS.`,
    },
    {
        title: 'Weather Forecast App',
        slug: 'weather-app',
        techStack: [
            'React',
            'JavaScript',
            'OpenWeather API',
            'CSS3',
            'Geolocation API',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://johnspurgeon-weather.netlify.app/',
        sourceCode: 'https://github.com/johnspurgeon/weather-app',
        year: 2023,
        description:
            'A responsive weather forecast application that provides detailed weather information, 5-day forecasts, and location-based weather data. Features beautiful UI animations and real-time weather updates.',
        role: `As the frontend developer, I:<br/>
        - Built the application using React and modern JavaScript.<br/>
        - Integrated OpenWeather API for real-time weather data.<br/>
        - Implemented geolocation features for automatic location detection.<br/>
        - Created smooth animations and transitions with CSS3.`,
    },
    {
        title: 'Recipe Finder',
        slug: 'recipe-finder',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Recipe API', 'Local Storage'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/johnspurgeon/recipe-finder',
        liveUrl: 'https://johnspurgeon-recipes.netlify.app/',
        year: 2023,
        description:
            'A recipe discovery application that helps users find recipes based on ingredients they have. Features ingredient-based search, favorite recipes, and nutritional information display.',
        role: `As the developer, I built this application using vanilla JavaScript, HTML5, and CSS3, integrated external recipe APIs, and implemented local storage for user preferences.`,
    },
];

export const CERTIFICATIONS = [
    {
        title: 'Oracle Certified AI Foundations Associate',
        issuer: 'Oracle',
        year: '2024',
    },
    {
        title: 'Oracle Certified Foundations Associate',
        issuer: 'Oracle',
        year: '2024',
    },
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
        issuer: 'Oracle',
        year: '2025',
    },
    {
        title: 'Azure AI Fundamentals',
        issuer: 'Microsoft',
        year: '2024',
    },
    {
        title: 'NPTEL Practical Cyber Security for Cyber Security Practitioners',
        issuer: 'NPTEL',
        year: '2024',
        score: '90%',
    },
];
