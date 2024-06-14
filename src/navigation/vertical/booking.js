const booking = [
  {
    title: "Booking",
    icon: { icon: "tabler-users" },
    to: null,
    children: [
      {
        title: "No. Booking",
        icon: { icon: "tabler-building-hospital" },
        to: null,
        children: [
          {
            title: "No. Booking",
            icon: { icon: "tabler-building-hospital" },
            to: null,
          },
          {
            title: "Deposits",
            icon: { icon: "tabler-device-ipad-dollar" },
            to: { path: process.env.VUE_API_BASE_URL + "/deposits" },
          },
          {
            title: "Client Subscriptions",
            icon: { icon: "tabler-device-ipad-horizontal-up" },
            to: {
              path: process.env.VUE_API_BASE_URL + "/client-subscriptions",
            },
          },
        ],
      },
      {
        title: "No. Calendar input",
        icon: { icon: "tabler-users-group" },
        to: null,
      },
    ],
  },
];

export default booking;
