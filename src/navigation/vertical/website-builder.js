import collection from "../../assets/icon/svg/collection.svg";
import usericon from "../../assets/icon/svg/usericon.svg";

const websiteBuilder = [
  {
    icon: { icon: usericon },
    title: "Website Builder",
    to: null,
    children: [
      {
        icon: { icon: collection },
        title: "Users Activity",
        to: {
          path:
            process?.env?.VUE_API_BASE_URL + "/website-builder/user-activity",
        },
      },
      {
        icon: { icon: collection },
        title: "Occupation Usage",
        to: {
          path:
            process?.env?.VUE_API_BASE_URL +
            "/website-builder/occupation-users-list",
        },
      },
      {
        icon: { icon: collection },
        title: "Custom Build Requests",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/personal-website-user-list",
        },
      },
    ],
  },
];

export default websiteBuilder;
