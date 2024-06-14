import banner from "../../assets/icon/svg/banner.svg";
import marketingcampaigns from "../../assets/icon/svg/marketingcampaigns.svg";
import shopandfparmacy from "../../assets/icon/svg/shopandfparmacy.svg";
import termandcondition from "../../assets/icon/svg/termandcondition.svg";
import agent from "./agent";
import booking from "./booking";
import clinicTreatmetnts from "./clinics -treatments";
import consentForms from "./consent-forms";
import dashboard from "./dashboard";
import finance from "./finance";
import insurance from "./insurance";
import service from "./service";
import settings from "./settings";
import shopAffiliate from "./shop-affiliate";
import shopPharmacy from "./shop-pharmacy";
import stripe from "./stripe";
import trainings from "./trainings";
import users from "./users";
import walletManagement from "./wallet-management";
import websiteBuilder from "./website-builder";

export default [
  {
    title: "Home",
    to: { name: "root" },
    icon: { icon: "tabler-smart-home" },
  },
  {
    title: "Second page",
    to: { name: "second-page" },
    icon: { icon: "tabler-file" },
  },
  ...dashboard,
  ...users,
  ...stripe,
  ...booking,
  {
    title: "Marketing Campaigns",
    to: { path: process?.env?.VUE_API_BASE_URL + "/marketing-campaigns" },
    icon: { icon: marketingcampaigns },
  },
  ...consentForms,
  ...walletManagement,
  ...shopPharmacy,
  {
    title: "Faces Pharmacy",
    to: null,
    icon: { icon: shopandfparmacy },
    children: [
      {
        title: "Faces Pharmacy Banners",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/faces-pharmacy-banners",
        },
        icon: { icon: banner },
      },
      {
        title: "Terms And Conditions",
        to: {
          path:
            process?.env?.VUE_API_BASE_URL +
            "/faces-pharmacy-termsandconditions",
        },
        icon: { icon: termandcondition },
      },
    ],
  },
  ...insurance,
  ...finance,
  ...clinicTreatmetnts,
  ...service,
  ...shopAffiliate,
  ...trainings,
  ...agent,
  ...settings,
  {
    title: "SEO Set up",
    to: null,
    icon: { icon: "tabler-file" },
    children: [
      {
        title: "SEO Set up",
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/seo-dev-pages",
        },
        icon: { icon: "tabler-file" },
      },
    ],
  },
  {
    title: "Email Builder",
    to: {
      path: process?.env?.VUE_API_BASE_URL + "/email-builder-view",
    },
    icon: { icon: "tabler-file" },
  },
  ...websiteBuilder,
  {
    title: "Personal Chat Message List",
    to: null,
    icon: { icon: "tabler-file" },
  },
  {
    title: "Accountancy",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Purchased Packages",
        icon: { icon: "tabler-smart-home" },
        to: {
          path:
            process?.env?.VUE_API_BASE_URL + "/accountancy/purchased-packages",
        },
      },
    ],
  },
  {
    title: "Flagged Users",
    to: {
      path: process?.env?.VUE_API_BASE_URL + "/flagged-users",
    },
    icon: { icon: "tabler-file" },
  },
  {
    title: "Logout",
    to: { name: "login" },
    icon: { icon: "tabler-file" },
  },
];
