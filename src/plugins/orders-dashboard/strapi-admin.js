export default {
  register(app) {
    app.addMenuLink({
      to: '/plugins/orders-dashboard',
      icon: () => '📋',
      intlLabel: {
        id: 'orders-dashboard.plugin.name',
        defaultMessage: 'Orders Dashboard',
      },
      Component: async () => import('./admin/src/pages/OrdersPage'),
    });
  },
  bootstrap() {},
};
