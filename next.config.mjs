/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    allowedDevOrigins: ["192.168.1.190"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
};

export default nextConfig;
