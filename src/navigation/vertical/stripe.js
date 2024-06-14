import alluser from "../../assets/icon/svg/alluser.svg";
import cardpayemnt from "../../assets/icon/svg/cardpayemnt.svg";
import swipmachine from "../../assets/icon/svg/swipmachine.svg";

const stripe = [
  {
    title: "Stripe",
    icon: { icon: swipmachine },
    to: null,
    children: [
      {
        title: "Stripe Onboarding",
        icon: { icon: alluser },
        to: { path: process?.env?.VUE_API_BASE_URL + "/stripe/management" },
      },
      {
        title: "Charge-back Management",
        icon: { icon: cardpayemnt },
        to: { path: process?.env?.VUE_API_BASE_URL + "/stripe/charge-back" },
      },
      {
        title: "Stripe Onboarding",
        icon: { icon: cardpayemnt },
        to: {
          path:
            process?.env?.VUE_API_BASE_URL +
            "/stripe/active-instant-payouts-users",
        },
      },
    ],
  },
];

export default stripe;
