const service = [
  {
    title: "Services",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Sharp Collections",
        icon: { icon: "tabler-smart-home" },
        to: { name: "sharp-collections" },
      },
      {
        title: "Sharp Inquiries",
        icon: { icon: "tabler-smart-home" },
        to: { name: "sharpcollections-requests" },
      },
      {
        title: "CPD Services",
        icon: { icon: "tabler-smart-home" },
        to: { name: "cpd-services" },
      },
      {
        title: "Yotta Pay",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Registration",
            icon: { icon: "tabler-smart-home" },
            to: { name: "yotta-pay-registrations" },
          },
          {
            title: "Payments",
            icon: { icon: "tabler-smart-home" },
            to: { name: "yotta-pay-payments" },
          },
          {
            title: "Stats",
            icon: { icon: "tabler-smart-home" },
            to: { name: "yotta-pay-stats" },
          },
        ],
      },
      {
        title: "Card Machine",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Applications",
            icon: { icon: "tabler-smart-home" },
            to: { name: "card-reader-applications" },
          },
          {
            title: "Companies",
            icon: { icon: "tabler-smart-home" },
            to: { name: "card-reader-applications-companies" },
          },
        ],
      },
      {
        title: "Accountancy",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Purchased Packages",
            icon: { icon: "tabler-smart-home" },
            to: { name: "accountancy-purchased-packages" },
          },
        ],
      },
      {
        title: "Plump Marketing Stats",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Admin Overview Stats",
            icon: { icon: "tabler-smart-home" },
            to: { name: "plump-marketing-overview-stats" },
          },
          {
            title: "User Activity",
            icon: { icon: "tabler-smart-home" },
            to: { name: "plump-marketing-user-activity" },
          },
          {
            title: "User",
            icon: { icon: "tabler-smart-home" },
            to: { name: "plump-marketing-users-financial-matrix" },
          },
        ],
      },
      {
        title: "Social media",
        icon: { icon: "tabler-smart-home" },
        to: { name: "social-media-requests" },
      },
      {
        title: "Holly Complications Partnership",
        icon: { icon: "tabler-smart-home" },
        to: { name: "holly-complications-partnership" },
      },
    ],
  },
];

export default service;
