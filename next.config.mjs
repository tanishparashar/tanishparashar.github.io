/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow build to succeed even with ESLint/TS errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // since Next.js’s Image component won’t optimize on Pages
  images: {
    unoptimized: true,
  },

  // ◆ ADD THESE ◆
  // tell Next to output a fully static site
  output: 'export',
  // ensures pages like /about become /about/index.html
  // makes routing more predictable on GitHub Pages
  trailingSlash: true,
}

export default nextConfig
