const websiteBuilder = [
  {
    icon: { icon: "tabler-smart-home" },
    title: "Website Builder",
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "Users Activity",
        to: {
          path:
            process?.env?.VUE_API_BASE_URL + "/website-builder/user-activity",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Occupation Usage",
        to: {
          path:
            process?.env?.VUE_API_BASE_URL +
            "/website-builder/occupation-users-list",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Custom Build Requests",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/personal-website-user-list",
        },
      },
    ],
  },
];

export default websiteBuilder;
