export default {
  register(app) {
    app.addMenuLink({
      to: '/plugins/enquiry-dashboard',
      icon: () => '📞',
      intlLabel: {
        id: 'enquiry-dashboard.plugin.name',
        defaultMessage: 'Enquiry',
      },
      Component: async () => import('./admin/src/pages/EnquiryPage'),
    });
  },
  bootstrap() {},
};
