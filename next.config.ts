import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: true,
  },
  devIndicators: {
    // These are now deprecated – safe to remove, but kept for backward compatibility
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: "pranav-shankar",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
