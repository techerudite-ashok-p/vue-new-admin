const shopAffiliate = [
  {
    title: "Shop Affiliate",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Payouts",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/affiliations/payouts",
        },
      },
      {
        title: "Orders",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/affiliations/orders",
        },
      },
    ],
  },
];

export default shopAffiliate;
