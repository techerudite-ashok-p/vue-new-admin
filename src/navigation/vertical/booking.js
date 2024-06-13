const booking = [
  {
    title: "Booking",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "No. Booking",
        icon: { icon: "tabler-smart-home" },
        to: null,
        children: [
          {
            title: "No. Booking",
            icon: { icon: "tabler-smart-home" },
            to: null,
          },
          {
            title: "Deposits",
            icon: { icon: "tabler-smart-home" },
            to: { name: "deposits" },
          },
          {
            title: "Client Subscriptions",
            icon: { icon: "tabler-smart-home" },
            to: { name: "client-subscriptions" },
          },
        ],
      },
      {
        title: "No. Calendar input",
        icon: { icon: "tabler-smart-home" },
        to: null,
      },
    ],
  },
];

export default booking;
