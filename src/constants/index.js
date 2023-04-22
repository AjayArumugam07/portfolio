import {qualcomm, ibm, hydrotek} from '../../public/index.js'

const navLinks = [
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'experience',
        title: 'Experience'
    },
    {
        id: 'projects',
        title: 'Projects'
    },
    {
        id: 'contact',
        title: 'Contact'
    }
]

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   }
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
    {
        title: 'Qualcomm Canada',
        subtitle: 'Software Engineering Intern - ML Tools',
        icon: qualcomm,
        iconBg: '#FFFFFF',
        date: 'April 2023 - August 2023',
        points: [
            'Part of Machine Learning Group focused on optimizing the deployment of Neural Networks to Snapdragon chips.',
            'Built internal tool for analyzing KPI of various machine learning models deployed on Snapdragon chips.',
            'Fixed 3 bugs in ITrace tool that analyzes performance of machine learning models on Qualcomm hardware.'
        ]
    },
    {
        title: 'IBM Canada',
        subtitle: 'Backend Developer Intern',
        icon: ibm,
        iconBg: '#FFFFFF',
        date: 'May 2022 - Aug 2022',
        points: [
            'Developed REST APIs for the IBM Cloud Pak For Security Product using Java and PostgreSQL.',
            'Identified root causes and developed fixes for 8 bugs in our REST API service.',
            'Developed a Groovy Script to deploy Kubernetes Operators and Microservices into test environment resulting in a 30% increase in functional test coverage.',
            'Utilized Docker, Kubernetes API and Groovy to automate deployment of dev environment for debugging our project, leading to a 70% boost in developer productivity.'
        ]
    },
    {
        title: 'Hydrotek Farm',
        subtitle: 'Full Stack Developer Intern',
        icon: hydrotek,
        iconBg: '#FFFFFF',
        date: 'Sep 2020 - Oct 2021',
        points: [
            'Spearheaded development of IoT mobile app using Ionic and Angular, enabling remote monitoring and control of IoT hardware in urban farms, improving farming efficiency and scalability.',
            'Engineered RESTful microservices using NodeJs, ExpressJs, MongooseJS, Docker and Kubernetes to manage over 20 GB of historical sensor data and customer data from MongoDB.',
            'Reduced deployment time by 90% by constructing CI/CD Pipelines in Jenkins to containerize microservices using Docker and deploy to AWS EKS.'
        ]
    },
    {
        title: 'Hydrotek Farm',
        subtitle: 'Embedded Software Developer Intern',
        icon: hydrotek,
        iconBg: '#FFFFFF',
        date: 'Feb 2020 - Oct 2020',
        points: [
            'Led a team of 3 engineers to build IoT Fertigation system using C, C++, ESP 32, FreeRTOS and AWS IoT Core that broadcasts and controls pH, nutrient levels, temperature, humidity of hydroponic farming systems.',
            'Delivered MVP to stakeholders in 12 weeks and supervised the factory mass production process.',
            'Designed Sensor Polling Architecture that retrieves sensor data through I2C and One Wire Bus protocols and relays it to AWS IoT Core every 15 seconds to be processed by our AI Disease Detection Algorithm for gathering insights about the customer’s crops.'
        ]
    }
]

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     // image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export {experiences, navLinks}
// export { services, technologies, experiences, testimonials, projects };