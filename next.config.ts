import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Añade aquí el nombre del paquete que causa el error
  transpilePackages: ["@once-ui-system/core"],

  experimental: {
    turbo: true, // Ya que estás usando Turbopack (según el error)
  },
};

export default nextConfig;
