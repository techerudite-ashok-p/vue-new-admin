const agent = [
  {
    icon: { icon: "tabler-smart-home" },
    title: "Agent",
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "Agent",
        to: { name: "staff-members-list" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Overview",
        to: { name: "staff-order-commission-overview" },
      },
    ],
  },
];

export default agent;
