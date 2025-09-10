"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    'orders-dashboard': {
        enabled: true,
        resolve: './src/plugins/orders-dashboard'
    },
    'tiffin-orders-dashboard': {
        enabled: true,
        resolve: './src/plugins/tiffin-orders-dashboard'
    },
    'enquiry-dashboard': {
        enabled: true,
        resolve: './src/plugins/enquiry-dashboard'
    },
    upload: {
        config: {
            provider: 'local',
            providerOptions: {},
            sizeLimit: 10485760, // 10MB in bytes
            breakpoints: {
                xlarge: 1920,
                large: 1000,
                medium: 750,
                small: 500,
                xsmall: 64
            },
        },
    },
});
