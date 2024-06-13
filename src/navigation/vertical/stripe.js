const stripe = [
  {
    title: "Stripe",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Stripe Onboarding",
        icon: { icon: "tabler-smart-home" },
        to: { name: "stripe-management" },
      },
      {
        title: "Charge-back Management",
        icon: { icon: "tabler-smart-home" },
        to: { name: "stripe-charge-back" },
      },
      {
        title: "Stripe Onboarding",
        icon: { icon: "tabler-smart-home" },
        to: { name: "stripe-active-instant-payouts-users" },
      },
    ],
  },
];

export default stripe;
