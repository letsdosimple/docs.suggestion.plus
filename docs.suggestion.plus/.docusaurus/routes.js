import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs.suggestion.plus/',
    component: ComponentCreator('/docs.suggestion.plus/', '81c'),
    routes: [
      {
        path: '/docs.suggestion.plus/',
        component: ComponentCreator('/docs.suggestion.plus/', '0f9'),
        routes: [
          {
            path: '/docs.suggestion.plus/',
            component: ComponentCreator('/docs.suggestion.plus/', 'ef6'),
            routes: [
              {
                path: '/docs.suggestion.plus/api-reference',
                component: ComponentCreator('/docs.suggestion.plus/api-reference', '428'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/changelog',
                component: ComponentCreator('/docs.suggestion.plus/changelog', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/faq',
                component: ComponentCreator('/docs.suggestion.plus/faq', 'e9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/getting-started',
                component: ComponentCreator('/docs.suggestion.plus/getting-started', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/premium-features',
                component: ComponentCreator('/docs.suggestion.plus/premium-features', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/privacy-policy',
                component: ComponentCreator('/docs.suggestion.plus/privacy-policy', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/suggestion-plus-website-analysis',
                component: ComponentCreator('/docs.suggestion.plus/suggestion-plus-website-analysis', '38a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/terms-of-service',
                component: ComponentCreator('/docs.suggestion.plus/terms-of-service', '21d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs.suggestion.plus/',
                component: ComponentCreator('/docs.suggestion.plus/', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
