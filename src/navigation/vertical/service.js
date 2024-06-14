const service = [
  {
    title: "Services",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Sharp Collections",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/sharp-collections",
        },
      },
      {
        title: "Sharp Inquiries",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/sharpcollections-requests",
        },
      },
      {
        title: "CPD Services",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/cpd-services",
        },
      },
      {
        title: "Yotta Pay",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Registration",
            icon: { icon: "tabler-smart-home" },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/yotta-pay/registrations",
            },
          },
          {
            title: "Payments",
            icon: { icon: "tabler-smart-home" },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/yotta-pay/payments",
            },
          },
          {
            title: "Stats",
            icon: { icon: "tabler-smart-home" },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/yotta-pay/stats",
            },
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
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/card-reader-applications",
            },
          },
          {
            title: "Companies",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/card-reader-applications/companies",
            },
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
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/accountancy/purchased-packages",
            },
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
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/plump-marketing/overview-stats",
            },
          },
          {
            title: "User Activity",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/plump-marketing/user-activity",
            },
          },
          {
            title: "User",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/plump-marketing/users-financial-matrix",
            },
          },
        ],
      },
      {
        title: "Social media",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/social-media-requests",
        },
      },
      {
        title: "Holly Complications Partnership",
        icon: { icon: "tabler-smart-home" },
        to: {
          path:
            process?.env?.VUE_API_BASE_URL + "/holly-complications-partnership",
        },
      },
    ],
  },
];

export default service;
