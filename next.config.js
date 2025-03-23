/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/amallo-app-builder",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
};

module.exports = nextConfig;
