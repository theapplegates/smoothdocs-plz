module.exports = [{
      plugin: require('../../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/src/plugins/gatsby-remark-autolink-headers/index.js"},{"resolve":"gatsby-remark-images","options":{"withAvif":true,"withWebp":true,"maxWidth":1200}}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/thor2/Documents/GitHub/smooth-dadssite/website"},
    },{
      plugin: require('../../smooth-doc/src/plugins/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Smooth DOC","short_name":"Smooth DOC","start_url":"/","display":"minimal-ui","icon":"/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/images/logo-manifest.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"2dbb472376a8edd37cc6853478dbfa0b"},
    },{
      plugin: require('../../smooth-doc/gatsby-browser.js'),
      options: {"plugins":[],"name":"Smooth DOC","siteUrl":"https://smooth-doc.com","description":"Ready to use documentation theme for Gatsby.","baseDirectory":"/Users/thor2/Documents/GitHub/smooth-dadssite","author":"Greg Bergé","sections":["About","Guide","Components","Reference"],"navItems":[{"title":"Docs","url":"/docs/"}],"twitterAccount":"neoziro","githubRepositoryURL":"https://github.com/gregberge/smooth-doc/","carbonAdsURL":"//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev","docSearch":{"apiKey":"a0c23a738fe1cfffa923daba2eb185be","indexName":"smooth-doc"}},
    },{
      plugin: require('../../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-154496255-5","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    }]
