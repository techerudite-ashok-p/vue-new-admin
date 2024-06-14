const settings = [
  {
    icon: { icon: "tabler-smart-home" },
    title: "Settings",
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "CMS",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/cmspages",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Kanvas",
        to: null,
        children: [
          {
            icon: { icon: "tabler-smart-home" },
            title: "CMS Pages",
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/kanvaspages",
            },
          },
        ],
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Marketing Consent Forms",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/marketingconsentforms",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Marketing Aftercare",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/marketingaftercare",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "User Guide",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/user-guide",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Reports",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/faces-reports  ",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Support Team",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/support-team",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Seller Support Members",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/seller-support-members",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Support Category",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/support-categories/list",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Promotion",
        to: null,
        children: [
          {
            icon: { icon: "tabler-smart-home" },
            title: "Messages",
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/promotional-message",
            },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Emails",
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/promotional-email",
            },
          },
        ],
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "FAQ",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/faq-category",
        },
      },
    ],
  },
];

export default settings;
