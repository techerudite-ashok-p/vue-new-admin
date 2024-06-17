import cms from "../../assets/icon/svg/cms.svg";
import emails from "../../assets/icon/svg/emails.svg";
import message from "../../assets/icon/svg/message.svg";
import overview from "../../assets/icon/svg/overview.svg";
import promotion from "../../assets/icon/svg/promotion.svg";
import settingsicon from "../../assets/icon/svg/settings.svg";
import supportcategory from "../../assets/icon/svg/supportcategory.svg";
import traning from "../../assets/icon/svg/traning.svg";
import userguide from "../../assets/icon/svg/userguide.svg";

const settings = [
  {
    icon: { icon: settingsicon },
    title: "Settings",
    to: null,
    children: [
      {
        icon: { icon: cms },
        title: "CMS",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/cmspages",
        },
      },
      {
        icon: { icon: traning },
        title: "Kanvas",
        to: null,
        children: [
          {
            icon: { icon: traning },
            title: "CMS Pages",
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/kanvaspages",
            },
          },
        ],
      },
      {
        icon: { icon: cms },
        title: "Marketing Consent Forms",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/marketingconsentforms",
        },
      },
      {
        icon: { icon: cms },
        title: "Marketing Aftercare",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/marketingaftercare",
        },
      },
      {
        icon: { icon: userguide },
        title: "User Guide",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/user-guide",
        },
      },
      {
        icon: { icon: overview },
        title: "Reports",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/faces-reports  ",
        },
      },
      {
        icon: { icon: traning },
        title: "Support Team",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/support-team",
        },
      },
      {
        icon: { icon: traning },
        title: "Seller Support Members",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/seller-support-members",
        },
      },
      {
        icon: { icon: supportcategory },
        title: "Support Category",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/support-categories/list",
        },
      },
      {
        icon: { icon: promotion },
        title: "Promotion",
        to: null,
        children: [
          {
            icon: { icon: message },
            title: "Messages",
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/promotional-message",
            },
          },
          {
            icon: { icon: emails },
            title: "Emails",
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/promotional-email",
            },
          },
        ],
      },
      {
        icon: { icon: promotion },
        title: "FAQ",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/faq-category",
        },
      },
    ],
  },
];

export default settings;
