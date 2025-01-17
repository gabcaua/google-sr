import { HeadConfig, defineConfig, type DefaultTheme } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

const docHead = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    // anaytics
  ['script', { src: 'https://umami.typical.gq/script.js', async: '', "data-website-id": '2dedf0d0-da4d-4b81-9cf3-2fac41885109', 'data-do-not-track': 'true' }],
  
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png', sizes: '180x180' }],

  // meta tags
  ['meta', { property: 'og:description', content: 'Complete set of tools to scrape google search results' }],
  ['meta', { name: 'author', content: 'TypicalNinja' }],
  ['meta', {
    name: 'keywords',
    content: 'google, npm, google-sr, google search, searchresults, javascript, typescript, google-search, google-api, scrape',
  }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: 'GSR' }],
] satisfies HeadConfig[];


// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "GSR",
  description: "Complete set of tools to scrape google search results",
  cleanUrls: true,
  lastUpdated : true,
  head: docHead,
  sitemap: {
    hostname: 'https://g-sr.vercel.app/',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/google/' },
      { text: 'API Docs', link: '/api/' }
    ],
    editLink: {
      pattern: 'https://github.com/typicalninja/google-sr/tree/master/apps/website/:path'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'O9D6RFQCVG',
        apiKey: 'f9d74f9f9f5a0fde8077000d1a75dc51',
        indexName: 'g-sr',
        insights: true
      }
    },
    sidebar: {
      '/google/': { base: '/google/', items: getGuideSidebar() },
      '/api': { base: '/api/', items: getAPISidebar() },
      '/api/sr': { base: '/api/sr/', items: getGSRApiSidebar() },
      '/api/selectors': { base: '/api/selectors/', items: getGSRSApiSidebar() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/typicalninja/google-sr' },
      { icon: 'discord', link: 'https://discord.gg/ynwckXS9T2' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/typicalninja/disci/blob/main/LICENSE">Apache 2.0 License</a>.',
      copyright: 'Copyright © 2021-Present <a href="https://typical.gq/">Typicalninja</a> & contributors'
    }
  },
  
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
  },
  pwa: {}
}))

function getGuideSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'sr',
      collapsed: true,
      items: [
        { text: 'Introduction', link: 'sr/' },
        { text: 'Usage', link: 'sr/usage' },
        { text: 'Advanced usage', link: 'sr/advanced' },
        { text: 'Result types', link: 'sr/types' },
        { text: 'API Documentation', link: 'api/sr/README', base: '/' },
      ]
    },
    {
      text: 'selectors',
      collapsed: true,
      items: [
        { text: 'Introduction', link: 'selectors/' },
        { text: 'Overview', link: 'selectors/overview' },

      ]
    },
    {
      text: 'that',
      collapsed: true,
      items: [
        { text: 'Introduction', link: 'that/' },
      ]
    }
  ]
}


// while the api files are auto generated these are hardcoded
function getAPISidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Gsr', 
      link: 'sr/README'
    },
    {
      text: 'Gsr selectors', 
      link: 'selectors/README'
    }
  ]
}

function getGSRApiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Module',
      link: 'README'
    },
    {
      text: 'Enumerations',
      collapsed: true,
      items: [
        {
          text: 'ResultTypes',
          link: 'enums/ResultTypes'
        }
      ]
    },
    {
      text: 'Interfaces',
      collapsed: true,
      items: [
        {
          text: 'SearchOptions',
          link: 'interfaces/SearchOptions'
        },
        {
          text: 'SearchResult node',
          link: 'interfaces/SearchResultNode'
        },
        {
          text: 'TranslateResult node',
          link: 'interfaces/TranslateResultNode'
        },
        {
          text: 'DictionaryResult node',
          link: 'interfaces/DictionaryResultNode'
        },
        {
          text: 'TimeResult node',
          link: 'interfaces/TimeResultNode'
        },
        {
          text: 'CurrencryResult node',
          link: 'interfaces/CurrencyResultNode'
        }
      ]
    }
  ]
}

function getGSRSApiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Module',
      link: 'README'
    }
  ]
}