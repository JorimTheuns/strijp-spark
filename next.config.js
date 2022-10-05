/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["en-UK", "nl-NL"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "nl-NL",
  },
}

module.exports = nextConfig
