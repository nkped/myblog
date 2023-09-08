/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://myblog-nkped.vercel.app',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}


/*NB 
- this dependency is for SEO-optimization
- 'siteUrl: process.env.SITE_URL' puts out URL in our env.var
- remember to add postbuild-script:
"scripts": {
    "other": "scripts",
    "postbuild": "next-sitemap"
  }, 
 */