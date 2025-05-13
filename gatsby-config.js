module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://peaceful-trifle-61538a.netlify.app/`,
    // Your Name
    name: 'Benjamin Dwumah',
    // Main Site Title
    title: `Benjamin Dwumah | Data Engineer`,
    // Description that goes under your name in main bio
    description: `Data Engineer`,
    // Optional: Github account URL
    github: `https://github.com/Ben74x`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/benjamin-dwumah74`,
    // Content of the About Me section
    about: `I'm a Data & Backend Engineer passionate about building scalable, high-performance distributed systems. I specialise in real-time data processing, cloud infrastructure, and streaming architecture using tools like Python, Java, AWS, PostgreSQL, and gRPC. My experience spans sports data platforms, cloud automation, and big data pipelines solving complex engineering problems in regulated and high-throughput environments. I’m especially drawn to the intersection of data infrastructure and meaningful product impact. I share projects and insights on GitHub and my blog, where I write about cloud computing, AI, backend architecture. Feel free to connect with me on LinkedIn.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Canteen Bot Services',
        description:
          'A serverless website that uses image recognition and a chatbot to offer services on beverages - Built with AWS services',
        link: 'https://bdwumah.dev/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/',
      },
      {
        name: 'Image Captioning App',
        description:
          'An image caption generator built using deep learning to describe images',
        link: 'https://github.com/Ben74x/Image-Captioning-on-MSCoco-Dataset',
      },
      {
        name: 'Dockerised E-Marketplace System',
        description:
          'A microservice-based e-commerce system, seamlessly dockerized for streamlined deployment and scalability',
        link: 'https://bdwumah.dev/blog/Containerising%20Microservice%20Project%20-%20EMART%20App/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'TXODDS UK LTD',
        description: 'Data Engineer, March 2023 - Present',
        link: '',
      },
      {
        name: 'Npontu Technologies',
        description: 'Cloud Support Engineer, September 2020 - August 2021',
        link: '',
      },
      {
        name: 'theSOFTtribe Ltd',
        description: 'Web Developer Intern, June 2017 - August 2017',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, Java',
      },
      {
        name: 'Tools & Frameworks',
        description: 'Git, SQL & PostgreSQL, Django, Linux, Docker, Elasticsearch, Grafana, Jenkins, Docker, Kubernetes',
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), Infrastructure as Code, Agile, Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
