const shopPharmacy = [
  {
    title: "Shop & Pharmacy",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Vendors",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Vendors",
            icon: { icon: "tabler-smart-home" },
            to: { name: "vendors" },
          },
          {
            title: "Vendor Discount Codes",
            icon: { icon: "tabler-smart-home" },
            to: { name: "vendors-discount-codes" },
          },
          {
            title: "Pharmacy commissions",
            icon: { icon: "tabler-smart-home" },
            to: { name: "vendors-zing-commissions" },
          },
        ],
      },
      {
        title: "Order",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Shop Orders",
            icon: { icon: "tabler-smart-home" },
            to: { name: "orders" },
          },
          {
            title: "Public Orders",
            icon: { icon: "tabler-smart-home" },
            to: null,
          },
          {
            title: "Shop Affiliation",
            icon: { icon: "tabler-smart-home" },
            to: { name: "vendors-zing-commissions" },
          },
        ],
      },
      {
        title: "Categories",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Categories",
            icon: { icon: "tabler-smart-home" },
            to: { name: "categories" },
          },
          {
            title: "Products",
            icon: { icon: "tabler-smart-home" },
            to: { name: "products" },
          },
          {
            title: "Product Reviews",
            icon: { icon: "tabler-smart-home" },
            to: { name: "products-review" },
          },
        ],
      },
      {
        title: "Pharmacy Orders",
        to: { name: "prescription-orders" },
        icon: { icon: "tabler-file" },
      },
      {
        title: "Pharmacy Registrations",
        to: { name: "prescribers-requests" },
        icon: { icon: "tabler-file" },
      },
      {
        title: "Prescribers",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Prescriber Leaderboard",
            icon: { icon: "tabler-smart-home" },
            to: { name: "prescriber-leader-board" },
          },
          {
            title: "Prescription Fees",
            icon: { icon: "tabler-smart-home" },
            to: { name: "prescription-fees" },
          },
          {
            title: "Prescriber Reviews",
            icon: { icon: "tabler-smart-home" },
            to: { name: "prescriber-reviews" },
          },
        ],
      },
      {
        title: "Shop Settings",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Banners",
            icon: { icon: "tabler-smart-home" },
            to: { name: "shopbanners" },
          },
          {
            title: "Social Links",
            icon: { icon: "tabler-smart-home" },
            to: { name: "sociallinks" },
          },
        ],
      },
      {
        title: "Pharma Leaderboard",
        icon: { icon: "tabler-smart-home" },
        to: { name: "vendors-pharma-leaderboard" },
      },
    ],
  },
];

export default shopPharmacy;
