import { ShoppingCart as PluginIcon } from '@strapi/icons';

export default {
  register(app) {
    app.addMenuLink({
      to: '/plugins/users-plans-dashboard',
      icon: () => '📝',
      intlLabel: {
        id: 'users-plans-dashboard.plugin.name',
        defaultMessage: 'Users Plans',
      },
      Component: async () => import('./admin/src/pages/UsersPlansPage'),
      badge: {
        content: 'new',
        color: 'secondary',
      },
    });
  },
  bootstrap() {},
};

