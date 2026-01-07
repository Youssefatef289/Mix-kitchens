#!/usr/bin/env node

/**
 * Script to update sitemap.xml with actual domain
 * Run: node scripts/update-sitemap.js YOUR_DOMAIN
 * Example: node scripts/update-sitemap.js https://yourdomain.com
 */

const fs = require('fs')
const path = require('path')

const domain = process.argv[2] || 'https://yourdomain.com'

const sitemapPath = path.join(__dirname, '../public/sitemap.xml')

if (!fs.existsSync(sitemapPath)) {
  console.error('sitemap.xml not found!')
  process.exit(1)
}

let sitemap = fs.readFileSync(sitemapPath, 'utf8')

// Replace placeholder domain
sitemap = sitemap.replace(/https:\/\/mix-kitchens\.vercel\.app/g, domain)
sitemap = sitemap.replace(/https:\/\/yourdomain\.com/g, domain)

fs.writeFileSync(sitemapPath, sitemap, 'utf8')

console.log(`✅ Sitemap updated with domain: ${domain}`)
console.log(`📝 Updated file: ${sitemapPath}`)

