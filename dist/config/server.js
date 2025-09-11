"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', 'localhost'),
    port: env.int('PORT', 3011),
    url: env('PUBLIC_URL', 'http://localhost:3011'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS'),
    },
});
