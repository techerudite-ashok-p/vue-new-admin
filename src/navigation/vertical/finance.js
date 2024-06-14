const finance = [
  {
    title: "Finance",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Finance lenders",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "Finance lenders",
            icon: { icon: "tabler-smart-home" },
            to: { name: "finance-lenders" },
          },
          {
            title: "Finance Lender Inquiries",
            icon: { icon: "tabler-smart-home" },
            to: { name: "finance-lenders-requests" },
          },
          {
            title: "Finance Loan Requests",
            icon: { icon: "tabler-smart-home" },
            to: { name: "finance-loan-requests" },
          },
          {
            title: "Payl8r Leaderboard",
            icon: { icon: "tabler-smart-home" },
            to: { name: "finance-payl8r-leaderboard" },
          },
        ],
      },
      {
        title: "PAyl8r Requests",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "PAyl8r Requests",
            icon: { icon: "tabler-smart-home" },
            to: { name: "payl8r-requests-list" },
          },
          {
            title: "Seller Payl8r Requests",
            icon: { icon: "tabler-smart-home" },
            to: { name: "payl8r-requests-seller-list" },
          },
          {
            title: "Pharmacy Payl8r Requests",
            icon: { icon: "tabler-smart-home" },
            to: { name: "payl8r-requests-pharmacy-list" },
          },
        ],
      },
    ],
  },
];

export default finance;
