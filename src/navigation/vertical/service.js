import collection from "../../assets/icon/svg/collection.svg";
import insurance from "../../assets/icon/svg/insurance.svg";
import registation from "../../assets/icon/svg/registation.svg";
import sharpinquiry from "../../assets/icon/svg/sharpinquiry.svg";
import socialmessage from "../../assets/icon/svg/socialmessage.svg";
import swipmachine from "../../assets/icon/svg/swipmachine.svg";
import usericon from "../../assets/icon/svg/usericon.svg";

const service = [
  {
    title: "Services",
    icon: { icon: insurance },
    to: null,
    children: [
      {
        title: "Sharp Collections",
        icon: { icon: collection },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/sharp-collections",
        },
      },
      {
        title: "Sharp Inquiries",
        icon: { icon: sharpinquiry },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/sharpcollections-requests",
        },
      },
      {
        title: "CPD Services",
        icon: { icon: collection },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/cpd-services",
        },
      },
      {
        title: "Yotta Pay",
        icon: { icon: swipmachine },
        to: null,
        children: [
          {
            title: "Registration",
            icon: { icon: registation },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/yotta-pay/registrations",
            },
          },
          {
            title: "Payments",
            icon: { icon: collection },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/yotta-pay/payments",
            },
          },
          {
            title: "Stats",
            icon: { icon: collection },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/yotta-pay/stats",
            },
          },
        ],
      },
      {
        title: "Card Machine",
        icon: { icon: swipmachine },
        to: null,
        children: [
          {
            title: "Applications",
            icon: { icon: registation },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/card-reader-applications",
            },
          },
          {
            title: "Companies",
            icon: { icon: collection },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/card-reader-applications/companies",
            },
          },
        ],
      },
      {
        title: "Accountancy",
        icon: { icon: usericon },
        to: null,
        children: [
          {
            title: "Purchased Packages",
            icon: { icon: collection },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/accountancy/purchased-packages",
            },
          },
        ],
      },
      {
        title: "Plump Marketing Stats",
        icon: { icon: swipmachine },
        to: null,
        children: [
          {
            title: "Admin Overview Stats",
            icon: { icon: registation },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/plump-marketing/overview-stats",
            },
          },
          {
            title: "User Activity",
            icon: { icon: collection },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/plump-marketing/user-activity",
            },
          },
          {
            title: "User",
            icon: { icon: collection },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/plump-marketing/users-financial-matrix",
            },
          },
        ],
      },
      {
        title: "Social media",
        icon: { icon: socialmessage },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/social-media-requests",
        },
      },
      {
        title: "Holly Complications Partnership",
        icon: { icon: socialmessage },
        to: {
          path:
            process?.env?.VUE_API_BASE_URL + "/holly-complications-partnership",
        },
      },
    ],
  },
];

export default service;
