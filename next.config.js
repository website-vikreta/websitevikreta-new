/** @type {import('next').NextConfig} */

// Imports

// Variable defining
const path = require("path");

// Configurations
const nextConfig = {
   experimental: {
      appDir: true,
   },
   sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
      prependData: `@import "imports.scss";`,
   },
}

// Exporting configurations
module.exports = nextConfig
