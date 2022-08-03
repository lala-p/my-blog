/** @type {import('next').NextConfig} */
const nextConfig = {
  "reactStrictMode": false,
  "compilerOptions": {
    "allowJs": true,
    "jsx": "preserve",
    "baseUrl": "./",
    "paths": {
      "@components/*": ["/components/*"],
      "@pageComponents/*": ["/pageComponents/*"],
      "@hooks/*": ["/hooks/*"],
      "@commonFun/*": ["/commonFun/*"],
      "@reducers/*": ["/reducers/*"],
      "@data/*": ["/data/*"],
      "@styles/*": ["/styles/*"],
    },
  }

}

module.exports = nextConfig
