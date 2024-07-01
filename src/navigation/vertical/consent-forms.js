import aftercare from "../../assets/icon/svg/aftercare.svg";
import consent from "../../assets/icon/svg/consent.svg";
import consentformicon from "../../assets/icon/svg/consentformicon.svg";
import consentfromtamplate from "../../assets/icon/svg/consentfromtamplate.svg";
import deposits from "../../assets/icon/svg/deposite.svg";
import forwordfrom from "../../assets/icon/svg/forwordfrom.svg";
import productracking from "../../assets/icon/svg/productracking.svg";

const consentForms = [
  {
    title: "Consent Forms",
    icon: { icon: consentformicon },
    to: null,
    children: [
      {
        title: "Consent Form Templates",
        icon: { icon: consentfromtamplate },
        to: { path: process.env.VUE_API_BASE_URL + "/default-consent-forms" },
      },
      {
        title: "Complete consent forms",
        icon: { icon: consent },
        to: { path: process.env.VUE_API_BASE_URL + "/filled-consent-forms" },
      },
      {
        title: "Most Popular consent form",
        icon: { icon: consent },
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/consent-forms/most-filled-consent-form-users",
        },
      },
      {
        title: "Aftercare form Templates",
        icon: { icon: aftercare },
        to: { path: process.env.VUE_API_BASE_URL + "/default-aftercare" },
      },
      {
        title: "Forward Consent Forms",
        icon: { icon: forwordfrom },
        to: { path: process.env.VUE_API_BASE_URL + "/forward-consent-forms" },
      },
      {
        title: "Product Tracking",
        icon: { icon: productracking },
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/consent-forms/thankyou-page-product-track",
        },
      },
      {
        title: "Consent Forms",
        icon: { icon: consentformicon },
        to: {
          path: process.env.VUE_API_BASE_URL + "/consent-forms",
        },
      },
      {
        title: "Deposits",
        icon: { icon: deposits },
        to: {
          path: process.env.VUE_API_BASE_URL + "/deposits",
        },
      },
      {
        title: "Forms & Products",
        icon: { icon: productracking },
        to: {
          path: process.env.VUE_API_BASE_URL + "/forms-products",
        },
      },
      {
        title: "Product Sales",
        icon: { icon: productracking },
        to: {
          path: process.env.VUE_API_BASE_URL + "/forms-products/product-list",
        },
      },
      {
        title: "Consent Form Used Count",
        icon: { icon: productracking },
        to: {
          name: "forms-products-consent-used",
        },
      },
      {
        title: "Medical Form Questions",
        icon: { icon: productracking },
        to: {
          path: process.env.VUE_API_BASE_URL + "/medical-questions",
        },
      },
    ],
  },
];

export default consentForms;
