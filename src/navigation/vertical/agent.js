import overview from "../../assets/icon/svg/overview.svg";
import traning from "../../assets/icon/svg/traning.svg";

const agent = [
  {
    icon: { icon: traning },
    title: "Agent",
    to: null,
    children: [
      {
        icon: { icon: traning },
        title: "Agent",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/staff-members/list",
        },
      },
      {
        icon: { icon: overview },
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
