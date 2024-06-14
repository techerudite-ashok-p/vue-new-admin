const agent = [
  {
    icon: { icon: "tabler-smart-home" },
    title: "Agent",
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "Agent",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/staff-members/list",
        },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Overview",
        to: {
          path:
            process?.env?.VUE_API_BASE_URL + "/staff-order-commission/overview",
        },
      },
    ],
  },
];

export default agent;
