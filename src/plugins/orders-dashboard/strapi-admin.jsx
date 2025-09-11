import { ShoppingCart } from '@strapi/icons';

export default {
  register(app) {
    app.addMenuLink({
      to: '/plugins/orders-dashboard',
      icon: ShoppingCart,
      intlLabel: {
        id: 'orders-dashboard.plugin.name',
        defaultMessage: 'Orders Dashboard',
      },
      Component: async () => import('./admin/src/pages/OrdersPage'),
      badge: {
        content: '',
        color: 'secondary',
      },
    });
  },
  bootstrap() {},
};
