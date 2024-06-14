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
    to: { name: "marketing-campaigns" },
    icon: { icon: "tabler-file" },
  },
  ...consentForms,
  ...walletManagement,
  ...shopPharmacy,
  {
    title: "Faces Pharmacy",
    to: null,
    icon: { icon: "tabler-file" },
    children: [
      {
        title: "Faces Pharmacy Banners",
        to: { name: "faces-pharmacy-banners" },
        icon: { icon: "tabler-file" },
      },
      {
        title: "Terms And Conditions",
        to: { name: "faces-pharmacy-termsandconditions" },
        icon: { icon: "tabler-file" },
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
        to: { name: "seo-dev-pages" },
        icon: { icon: "tabler-file" },
      },
    ],
  },
  {
    title: "Email Builder",
    to: { name: "email-builder-view" },
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
        to: { name: "accountancy-purchased-packages" },
      },
    ],
  },
  {
    title: "Flagged Users",
    to: { name: "flagged-users" },
    icon: { icon: "tabler-file" },
  },
  {
    title: "Logout",
    to: { name: "login" },
    icon: { icon: "tabler-file" },
  },
];
