const dashboard = [
  {
    title: "Dashboard",
    icon: { icon: "tabler-layout-dashboard-filled" },
    to: null,
    children: [
      {
        icon: { icon: "tabler-layout-dashboard-filled" },
        title: "Dashboard",
        to: { path: process?.env?.VUE_API_BASE_URL + "/dashboard" },
      },
      {
        icon: { icon: "tabler-chart-pie-filled" },
        title: "Stats",
        to: { path: process?.env?.VUE_API_BASE_URL + "/dashboard/stats" },
      },
    ],
  },
];

export default dashboard;
console.log(
  "path: process?.env?.VUE_API_BASE_URL",
  process?.env?.VUE_API_BASE_URL
);
