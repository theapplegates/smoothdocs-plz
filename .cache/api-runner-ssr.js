var plugins = [{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"topLevelImportPaths":["@xstyled/styled-components"],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/src/plugins/gatsby-remark-autolink-headers/index.js"},{"resolve":"gatsby-remark-images","options":{"withAvif":true,"withWebp":true,"maxWidth":1200}}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/thor2/Documents/GitHub/smooth-dadssite/website"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/src/plugins/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Smooth DOC","short_name":"Smooth DOC","start_url":"/","display":"minimal-ui","icon":"/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/images/logo-manifest.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"2dbb472376a8edd37cc6853478dbfa0b"},
    },{
      name: 'smooth-doc',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/gatsby-ssr'),
      options: {"plugins":[],"name":"Smooth DOC","siteUrl":"https://smooth-doc.com","description":"Ready to use documentation theme for Gatsby.","baseDirectory":"/Users/thor2/Documents/GitHub/smooth-dadssite","author":"Greg Bergé","sections":["About","Guide","Components","Reference"],"navItems":[{"title":"Docs","url":"/docs/"}],"twitterAccount":"neoziro","githubRepositoryURL":"https://github.com/gregberge/smooth-doc/","carbonAdsURL":"//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev","docSearch":{"apiKey":"a0c23a738fe1cfffa923daba2eb185be","indexName":"smooth-doc"}},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/thor2/Documents/GitHub/smooth-dadssite/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-154496255-5","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
