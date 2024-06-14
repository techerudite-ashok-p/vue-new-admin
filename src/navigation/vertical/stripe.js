const stripe = [
  {
    title: "Stripe",
    icon: { icon: "tabler-swipe" },
    to: null,
    children: [
      {
        title: "Stripe Onboarding",
        icon: { icon: "tabler-users-group" },
        to: { path: process?.env?.VUE_API_BASE_URL + "/stripe/management" },
      },
      {
        title: "Charge-back Management",
        icon: { icon: "tabler-credit-card" },
        to: { path: process?.env?.VUE_API_BASE_URL + "/stripe/charge-back" },
      },
      {
        title: "Stripe Onboarding",
        icon: { icon: "tabler-credit-card" },
        to: {
          path:
            process?.env?.VUE_API_BASE_URL +
            "/stripe/active-instant-payouts-users",
        },
      },
    ],
  },
];

export default stripe;
