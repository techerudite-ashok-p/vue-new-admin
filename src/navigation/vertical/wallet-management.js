const walletManagement = [
  {
    title: "Wallet Management",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Wallet Management",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Wallet Campaigns",
            icon: { icon: "tabler-smart-home" },
            to: { name: "wallet-management-add-money" },
          },
          {
            title: "Wallet History",
            icon: { icon: "tabler-smart-home" },
            to: { name: "wallet-management-history" },
          },
        ],
      },
    ],
  },
];

export default walletManagement;
