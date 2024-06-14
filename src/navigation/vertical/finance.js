import financess from "../../assets/icon/svg/finance.svg";
import financeleaderinquiry from "../../assets/icon/svg/financeleaderinquiry.svg";

const finance = [
  {
    title: "Finance",
    icon: { icon: financess },
    to: null,
    children: [
      {
        title: "Finance lenders",
        icon: { icon: financess },
        to: null,
        children: [
          {
            title: "Finance lenders",
            icon: { icon: financess },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/finance-lenders",
            },
          },
          {
            title: "Finance Lender Inquiries",
            icon: { icon: financeleaderinquiry },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/finance-lenders-requests",
            },
          },
          {
            title: "Finance Loan Requests",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/app-admin/finance-loan-requests",
            },
          },
          {
            title: "Payl8r Leaderboard",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/finance/payl8r-leaderboard",
            },
          },
        ],
      },
      {
        title: "PAyl8r Requests",
        icon: { icon: financess },
        to: null,
        children: [
          {
            title: "PAyl8r Requests",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/payl8r-requests/list?selectedTab=pending",
            },
          },
          {
            title: "Seller Payl8r Requests",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/payl8r-requests/seller-list",
            },
          },
          {
            title: "Pharmacy Payl8r Requests",
            icon: { icon: "tabler-smart-home" },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL +
                "/payl8r-requests/pharmacy-list",
            },
          },
        ],
      },
    ],
  },
];

export default finance;
