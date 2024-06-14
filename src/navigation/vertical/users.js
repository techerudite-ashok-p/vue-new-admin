const users = [
  {
    title: "Users",
    icon: { icon: "tabler-users" },
    to: null,
    children: [
      {
        icon: { icon: "tabler-users" },
        title: "All User",
        to: { path: process.env.VUE_API_BASE_URL + "/users" },
      },
      {
        icon: { icon: "tabler-users-group" },
        title: "Groups",
        to: { path: process.env.VUE_API_BASE_URL + "/users/groups" },
      },
      {
        icon: { icon: "tabler-building-hospital" },
        title: "Clinics",
        to: null,
        children: [
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Clinics",
            to: { path: process.env.VUE_API_BASE_URL + "/clinics" },
          },
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Booking-Profile",
            to: {
              path: process.env.VUE_API_BASE_URL + "/clinics/booking-profiles",
            },
          },
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Clinic-Reviews",
            to: { path: process.env.VUE_API_BASE_URL + "/clinic-reviews" },
          },
          {
            icon: { icon: "tabler-building-hospital" },
            title: "SEO Treatments",
            to: { path: process.env.VUE_API_BASE_URL + "/treatments-list" },
          },
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Clinic Booking Requests",
            to: {
              path: process.env.VUE_API_BASE_URL + "/clinic-booking-requests",
            },
          },
          {
            icon: { icon: "tabler-users-group" },
            title: "Completed Profiles",
            to: {
              path: process.env.VUE_API_BASE_URL + "/completed-profiles",
            },
          },
        ],
      },
      {
        icon: { icon: "tabler-calendar-user" },
        title: "Calendar Users",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/calender",
        },
      },
      {
        icon: { icon: "tabler-calendar-user" },
        title: "Bookings",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/bookings-list",
        },
      },
      {
        icon: { icon: "tabler-bell-ringing-filled" },
        title: "Notifications",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/notification",
        },
      },
      {
        icon: { icon: "tabler-users-group" },
        title: "Users Added Consent Without Clinic",
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/users/consent-form-without-clinic-user-list",
        },
      },
      {
        icon: { icon: "tabler-users-group" },
        title: "Users Added Consent Without Treatment",
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/users/consent-form-without-treatment-user-list",
        },
      },

      {
        icon: { icon: "tabler-users-group" },
        title: "Users Hair Prescription List",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/hair-prescription-list",
        },
      },
      {
        icon: { icon: "tabler-users-group" },
        title: "Hair Prescription Enrolled Users",
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/users/hair-prescription-enrolled-users",
        },
      },
      {
        icon: { icon: "tabler-building-hospital" },
        title: "Report",
        to: null,
        children: [
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Booking And Consent Forms",
            to: {
              path:
                process.env.VUE_API_BASE_URL +
                "/report/booking-and-consent-forms",
            },
          },
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Clinic and treatments",
            to: {
              path:
                process.env.VUE_API_BASE_URL + "/report/clinic-and-treatments",
            },
          },
          {
            icon: { icon: "tabler-building-hospital" },
            title: "Shop",
            to: {
              path: process.env.VUE_API_BASE_URL + "/report/shop",
            },
          },
        ],
      },
    ],
  },
];

export default users;
