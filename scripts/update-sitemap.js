#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import the sitemap generator
const { generateSitemapXML, generateRobotsTxt } = require('../src/utils/sitemapGenerator.js');

// Function to update sitemap
function updateSitemap() {
  try {
    const sitemapXML = generateSitemapXML();
    const robotsTxt = generateRobotsTxt();
    
    // Write sitemap.xml
    fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXML);
    console.log('✅ Sitemap updated successfully');
    
    // Write robots.txt
    fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);
    console.log('✅ Robots.txt updated successfully');
    
    console.log('📅 Last updated:', new Date().toISOString());
  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
  }
}

// Run the update
updateSitemap(); 