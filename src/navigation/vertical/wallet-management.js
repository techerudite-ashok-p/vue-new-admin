import walletamagement from "../../assets/icon/svg/walletamagement.svg";
import walletcompaing from "../../assets/icon/svg/walletcompaing.svg";
import wallethistory from "../../assets/icon/svg/wallethistory.svg";

const walletManagement = [
  {
    title: "Wallet Management",
    icon: { icon: walletamagement },
    to: null,
    children: [
      {
        title: "Wallet Management",
        icon: { icon: walletamagement },
        to: null,
        children: [
          {
            title: "Wallet Campaigns",
            icon: { icon: walletcompaing },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/wallet-management/add-money",
            },
          },
          {
            title: "Wallet History",
            icon: { icon: wallethistory },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/wallet-management/history",
            },
          },
        ],
      },
    ],
  },
];

export default walletManagement;
