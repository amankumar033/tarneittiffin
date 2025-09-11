import { Phone } from '@strapi/icons';

export default {
  register(app) {
    app.addMenuLink({
      to: '/plugins/enquiry-dashboard',
      icon: Phone,
      intlLabel: {
        id: 'enquiry-dashboard.plugin.name',
        defaultMessage: 'Enquiry',
      },
      Component: async () => import('./admin/src/pages/EnquiryPage'),
      badge: {
        content: '',
        color: 'secondary',
      },
    });
  },
  bootstrap() {},
};
