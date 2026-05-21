import { type Config } from "prettier";

const config: Config = {
	useTabs: true,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindFunctions: ["cn", "cva"],
};

export default config;
