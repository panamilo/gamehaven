import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server be opened from a phone on the same Wi-Fi. Without it Next
  // blocks its own dev assets for any origin but localhost, which leaves the page
  // rendered but with no images or scripts, and the tab spinning forever.
  allowedDevOrigins: ["192.168.2.2", "192.168.*.*"],
};

export default nextConfig;
