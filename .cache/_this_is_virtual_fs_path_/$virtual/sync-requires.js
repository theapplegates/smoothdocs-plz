
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/thor2/Documents/GitHub/smooth-dadssite/website/.cache/dev-404-page.js")),
  "component---smooth-doc-src-templates-doc-js": preferDefault(require("/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/src/templates/doc.js")),
  "component---smooth-doc-src-templates-page-js": preferDefault(require("/Users/thor2/Documents/GitHub/smooth-dadssite/smooth-doc/src/templates/page.js"))
}

