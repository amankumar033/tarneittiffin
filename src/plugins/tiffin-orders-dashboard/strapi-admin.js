export default {
  register(app) {
    app.addMenuLink({
      to: '/plugins/tiffin-orders-dashboard',
      icon: () => '🍱',
      intlLabel: {
        id: 'tiffin-orders-dashboard.plugin.name',
        defaultMessage: 'Tiffin Orders',
      },
      Component: async () => import('./admin/src/pages/TiffinOrdersPage'),
    });
  },
  bootstrap() {},
};
