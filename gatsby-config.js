module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://peaceful-trifle-61538a.netlify.app/`,
    // Your Name
    name: 'Benjamin Dwumah',
    // Main Site Title
    title: `Benjamin Dwumah | DevOps Engineer`,
    // Description that goes under your name in main bio
    description: `DevOps Engineer | Cloud Architect`,
    // Optional: Github account URL
    github: `https://github.com/Ben74x`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/benjamin-dwumah74/`,
    // Content of the About Me section
    about: `I'm a motivated DevOps Engineer with experience in automating, architecting and optimizing mission critical deployments over various infrastructure. I'm also passionate about AI, and I share my progress and thoughts through my github and blog. I love to chat about Python, DevOps & Cloud practices, Machine Learning and Anime. You can reach out to me on my LinkedIn.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'VProfile',
        description:
          'A fast automated web stack server stack built on Hashicorp Vagrant using IaC',
        link: 'https://github.com/Ben74x/VProfile-Proj',
      },
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
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
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
        name: 'Languages & Frameworks',
        description:
          'Python, Flask, Django',
      },
      {
        name: 'DevOps Tools',
        description: 'Git, Maven, Jenkins, Ansible, Chef, Puppet, Docker, Terraform, Kubernetes',
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), Microservices, API design',
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
