import banner from "../../assets/icon/svg/banner.svg";
import cardpayemnt from "../../assets/icon/svg/cardpayemnt.svg";
import cart from "../../assets/icon/svg/cart.svg";
import dashboardicon from "../../assets/icon/svg/dashboardicon.svg";
import discount from "../../assets/icon/svg/discount.svg";
import pharmancyregister from "../../assets/icon/svg/pharmancyregister.svg";
import prescriberfees from "../../assets/icon/svg/prescriberfees.svg";
import prescriberreview from "../../assets/icon/svg/prescriberreview.svg";
import prescribers from "../../assets/icon/svg/prescribers.svg";
import product from "../../assets/icon/svg/product.svg";
import productreview from "../../assets/icon/svg/productreview.svg";
import publicoder from "../../assets/icon/svg/publicoder.svg";
import shopandfparmacy from "../../assets/icon/svg/shopandfparmacy.svg";
import sociallink from "../../assets/icon/svg/sociallink.svg";
import vendor from "../../assets/icon/svg/vandor.svg";

const shopPharmacy = [
  {
    title: "Shop & Pharmacy",
    icon: { icon: shopandfparmacy },
    to: null,
    children: [
      {
        title: "Vendors",
        icon: { icon: cart },
        to: null,
        children: [
          {
            title: "Vendors",
            icon: { icon: vendor },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/vendors",
            },
          },
          {
            title: "Vendor Discount Codes",
            icon: { icon: discount },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/vendors/discount-codes",
            },
          },
          {
            title: "Pharmacy commissions",
            icon: { icon: discount },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/vendors/zing-commissions",
            },
          },
        ],
      },
      {
        title: "Order",
        icon: { icon: vendor },
        to: null,
        children: [
          {
            title: "Shop Orders",
            icon: { icon: discount },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/orders",
            },
          },
          {
            title: "Public Orders",
            icon: { icon: publicoder },
            to: null,
          },
          {
            title: "Shop Affiliation",
            icon: { icon: discount },
            to: {
              path:
                process?.env?.VUE_API_BASE_URL + "/vendors/zing-commissions",
            },
          },
        ],
      },
      {
        title: "Categories",
        icon: { icon: vendor },
        to: null,
        children: [
          {
            title: "Categories",
            icon: { icon: dashboardicon },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/categories",
            },
          },
          {
            title: "Products",
            icon: { icon: product },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/products",
            },
          },
          {
            title: "Product Reviews",
            icon: { icon: productreview },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/products/review",
            },
          },
        ],
      },
      {
        title: "Pharmacy Orders",
        icon: { icon: publicoder },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/prescription-orders",
        },
      },
      {
        title: "Pharmacy Registrations",
        icon: { icon: pharmancyregister },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/prescribers-requests",
        },
      },
      {
        title: "Prescribers",
        icon: { icon: prescribers },
        to: null,
        children: [
          {
            title: "Prescriber Leaderboard",
            icon: { icon: cardpayemnt },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/prescriber-leader-board",
            },
          },
          {
            title: "Prescription Fees",
            icon: { icon: prescriberfees },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/prescription-fees",
            },
          },
          {
            title: "Prescriber Reviews",
            icon: { icon: prescriberreview },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/prescriber-reviews",
            },
          },
        ],
      },
      {
        title: "Shop Settings",
        icon: { icon: cart },
        to: null,
        children: [
          {
            title: "Banners",
            icon: { icon: banner },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/shopbanners",
            },
          },
          {
            title: "Social Links",
            icon: { icon: sociallink },
            to: {
              path: process?.env?.VUE_API_BASE_URL + "/sociallinks",
            },
          },
        ],
      },
      {
        title: "Pharma Leaderboard",
        icon: { icon: discount },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/vendors/pharma-leaderboard",
        },
      },
    ],
  },
];

export default shopPharmacy;
