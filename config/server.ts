export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3011),
  url: env('PUBLIC_URL', 'https://admin.tarneittiffin.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
