/* eslint-disable @typescript-eslint/no-var-requires */
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                appear: {
                    "0%": { transform: "scale(0.8)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            animation: {
                appear: "appear 0.2s ease-out forwards",
            },
        },
        screens: {
            xs: "320px",
            ...defaultTheme.screens,
        },
    },
    plugins: [
        plugin(function ({ addComponents, theme }) {
            addComponents({
                ".container": {
                    maxWidth: theme("columns.7xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: theme("spacing.4"),
                    paddingRight: theme("spacing.4"),
                },
            });
        }),
    ],
};
