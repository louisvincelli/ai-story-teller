import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config:Config = {
    content:[
        './app/**/*.{.js,ts,jsx,tsx}',
        './components/**/*.{.js,ts,jsx,tsx}',
        './pages/**/*.{.js,ts,jsx,tsx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            }
        },
    },
    plugins: [heroui({
        themes:{
            light: {
                //..
                colors: {
                    primary: {
                        DEFAULT: "#c45302",
                    }
                },
            },
            dark: {
                //..
                colors: {},
            },
            //... custom themes
        },
    })],
}
export default config