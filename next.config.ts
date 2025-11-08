import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: () => [
    {
      destination: "https://us-assets.i.posthog.com/static/:path*",
      source: "/ingest/static/:path*",
    },
    {
      destination: "https://us.i.posthog.com/:path*",
      source: "/ingest/:path*",
    },
  ],
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
