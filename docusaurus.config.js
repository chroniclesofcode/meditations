// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'chroniclesofcode',
  tagline: 'Short articles about things I find interesting',
  favicon: 'img/dicon.jpeg',

  // Set the production url of your site here
  url: 'https://chroniclesofcode.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chroniclesofcode', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chroniclesofcode/blog/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/dicon.jpeg',
      navbar: {
        title: 'chroniclesofcode',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dicon.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'programmingSidebar',
            position: 'left',
            label: 'Programming',
          },
          {
            type: 'docSidebar',
            sidebarId: 'thoughtsSidebar',
            position: 'left',
            label: 'Thoughts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {
            href: 'https://github.com/chroniclesofcode/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Programming',
            items: [
              {
                label: 'Blog',
                to: '/docs/programming/intro',
              },
            ],
          },
          {
            title: 'Thoughts',
            items: [
              {
                label: 'Intro',
                href: '/docs/thoughts/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                to: '/docs/portfolio/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/chroniclesofcode',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} chroniclesofcode`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          docsRouteBasePath: "/"
        }
      ]
    ]
};

module.exports = config;
