import type { NextConfig } from "next";

interface WatchOptions {
  poll: number;
  aggregateTimeout: number;
}

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
