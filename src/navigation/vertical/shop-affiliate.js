import oders from "../../assets/icon/svg/oders.svg";
import payout from "../../assets/icon/svg/payout.svg";
import walletamagement from "../../assets/icon/svg/walletamagement.svg";

const shopAffiliate = [
  {
    title: "Shop Affiliate",
    icon: { icon: walletamagement },
    to: null,
    children: [
      {
        title: "Payouts",
        icon: { icon: payout },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/affiliations/payouts",
        },
      },
      {
        title: "Orders",
        icon: { icon: oders },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/affiliations/orders",
        },
      },
    ],
  },
];

export default shopAffiliate;
