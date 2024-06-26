import dashboardicon from "../../assets/icon/svg/dashboardicon.svg";
import stats from "../../assets/icon/svg/stats.svg";

const dashboard = [
  {
    title: "Dashboard",
    icon: { icon: dashboardicon },
    to: null,
    children: [
      {
        icon: { icon: dashboardicon },
        title: "Dashboard",
        to: { name: "dashboard" },
      },
      {
        icon: { icon: stats },
        title: "Stats",
        to: { name: "dashboard-stats" },
      },
    ],
  },
]

export default dashboard;
