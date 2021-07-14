const config = {
    ssr: false,
    target: "static",
    tailwindcss: {
        configPath: "~/tailwind.config.js",
        cssPath: "~/assets/tailwind.css",
    },
    buildModules: [
        //
        "@nuxtjs/tailwindcss",
        "nuxt-vite",
    ],
    vite: {
        server: {
            fs: { strict: false },
        },
        vue: {},
    },
    plugins: [],
    build: {
        postcss: {
            preset: {
                autoprefixer: {},
            },
        },
    },
};

export default config;
