
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/franciscoveranicola/SWE/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/franciscoveranicola/SWE/portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/franciscoveranicola/SWE/portfolio/src/pages/contact.js")),
  "component---src-pages-home-js": preferDefault(require("/Users/franciscoveranicola/SWE/portfolio/src/pages/home.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/franciscoveranicola/SWE/portfolio/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/franciscoveranicola/SWE/portfolio/src/pages/projects.js"))
}

