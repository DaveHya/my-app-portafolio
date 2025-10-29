import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Añade aquí el nombre del paquete que causa el error
  transpilePackages: ["@once-ui-system/core"],

  
};

export default nextConfig;
