const websiteBuilder = [
  {
    icon: { icon: "tabler-smart-home" },
    title: "Website Builder",
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "Users Activity",
        to: { name: "website-builder-user-activity" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Occupation Usage",
        to: { name: "website-builder-occupation-users-list" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Custom Build Requests",
        to: { name: "personal-website-user-list" },
      },
    ],
  },
];

export default websiteBuilder;
