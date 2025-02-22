import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here host image */
	images: {
		remotePatterns: [
			{
				hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
			},
			{
				hostname: "res.cloudinary.com",
			},
			{
				hostname: "picsum.photos",
			},
		],
	},
};

export default nextConfig;
