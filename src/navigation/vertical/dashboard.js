const dashboard = [
  {
    title: "Dashboard",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "Dashboard",
        to: { name: "dashboard" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Stats",
        to: { name: "dashboard-stats" },
      },
    ],
  },
];

export default dashboard;
