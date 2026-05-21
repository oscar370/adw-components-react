import type { Preview } from "@storybook/nextjs-vite";
import { themes } from "storybook/theming";
import "../src/core/app.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},

		darkMode: {
			dark: { ...themes.dark },
			light: { ...themes.light },
		},

		docs: {
			toc: true,
			canvas: {
				sourceState: "shown",
			},
			theme: window.matchMedia("(prefers-color-scheme: dark)").matches
				? themes.dark
				: {
						...themes.light,
						appContentBg: "var(--background)",
					},
		},
	},
};

export default preview;
