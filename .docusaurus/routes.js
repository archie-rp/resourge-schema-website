import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c4a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'acf'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '909'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c21'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '444'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '267'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '26b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '182'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'c33'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '1ec'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c80'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '6d9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '996'),
    routes: [
      {
        path: '/docs/api/Any',
        component: ComponentCreator('/docs/api/Any', '58f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/Array',
        component: ComponentCreator('/docs/api/Array', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/Boolean',
        component: ComponentCreator('/docs/api/Boolean', 'e32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/Date',
        component: ComponentCreator('/docs/api/Date', 'ea9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/Number',
        component: ComponentCreator('/docs/api/Number', '642'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/Object',
        component: ComponentCreator('/docs/api/Object', 'c76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/Rules',
        component: ComponentCreator('/docs/api/Rules', 'fb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/String',
        component: ComponentCreator('/docs/api/String', '724'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/api',
        component: ComponentCreator('/docs/category/api', '664'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Versions',
        component: ComponentCreator('/docs/Versions', '16a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7a9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
