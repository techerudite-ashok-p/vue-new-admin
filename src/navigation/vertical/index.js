import booking from "./booking";
import consentForms from "./consent-forms";
import dashboard from "./dashboard";
import insurance from "./insurance";
import shopPharmacy from "./shop-pharmacy";
import stripe from "./stripe";
import users from "./users";
import walletManagement from "./wallet-management";

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
];
