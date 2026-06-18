import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'b40'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '230'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '022'),
            routes: [
              {
                path: '/api-reference',
                component: ComponentCreator('/api-reference', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/changelog',
                component: ComponentCreator('/changelog', '51d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', 'cc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', '252'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/premium-features',
                component: ComponentCreator('/premium-features', '548'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/privacy-policy',
                component: ComponentCreator('/privacy-policy', 'd63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/suggestion-plus-website-analysis',
                component: ComponentCreator('/suggestion-plus-website-analysis', 'c21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/terms-of-service',
                component: ComponentCreator('/terms-of-service', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '84d'),
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
