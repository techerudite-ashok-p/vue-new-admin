const settings = [
  {
    icon: { icon: "tabler-smart-home" },
    title: "Settings",
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "CMS",
        to: { name: "cmspages" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Kanvas",
        to: null,
        children: [
          {
            icon: { icon: "tabler-smart-home" },
            title: "CMS Pages",
            to: { name: "kanvaspages" },
          },
        ],
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Marketing Consent Forms",
        to: { name: "marketingconsentforms" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Marketing Aftercare",
        to: { name: "marketingaftercare" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "User Guide",
        to: { name: "user-guide" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Reports",
        to: { name: "faces-reports" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Support Team",
        to: { name: "support-team" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Seller Support Members",
        to: { name: "seller-support-members" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Support Category",
        to: { name: "support-categories-list" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Promotion",
        to: null,
        children: [
          {
            icon: { icon: "tabler-smart-home" },
            title: "Messages",
            to: { name: "promotional-message" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Emails",
            to: { name: "promotional-email" },
          },
        ],
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "FAQ",
        to: { name: "faq-category" },
      },
    ],
  },
];

export default settings;
