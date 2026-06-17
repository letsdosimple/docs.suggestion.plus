// @ts-nocheck
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suggestion Plus Docs',
  tagline: 'Official Documentation for Suggestion Plus',
  favicon: 'img/logo.png',

  url: 'https://letsdosimple.github.io',
  baseUrl: '/',

  organizationName: 'letsdosimple',
  projectName: 'letsdosimple.github.io',
  deploymentBranch: 'main',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/letsdosimple/docs.suggestion.plus/tree/main/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Suggestion Plus Docs',
      logo: {
        alt: 'Suggestion Plus',
        src: 'img/logo.png',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },

        {
          href: 'https://suggestion.plus',
          label: 'Website',
          position: 'right',
        },

        {
          href: 'https://github.com/letsdosimple/docs.suggestion.plus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Home',
              to: '/',
            },
          ],
        },

        {
          title: 'Resources',
          items: [
            {
              label: 'Website',
              href: 'https://suggestion.plus',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/letsdosimple/docs.suggestion.plus',
            },
          ],
        },

        {
          title: 'Support',
          items: [
            {
              label: 'Contact',
              href: 'mailto:support@letsdosimple.com',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Suggestion Plus. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;