const users = [
  {
    title: "Users",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        icon: { icon: "tabler-smart-home" },
        title: "All User",
        to: { name: "users" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Groups",
        to: { name: "users-groups" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Clinics",
        to: null,
        children: [
          {
            icon: { icon: "tabler-smart-home" },
            title: "Clinics",
            to: { name: "clinics" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Booking-Profile",
            to: { name: "clinics-booking-profiles" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Clinic-Reviews",
            to: { name: "clinic-reviews" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "SEO Treatments",
            to: { name: "treatments-list" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Clinic Booking Requests",
            to: { name: "clinic-booking-requests" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Completed Profiles",
            to: { name: "completed-profiles" },
          },
        ],
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Calendar Users",
        to: { name: "users-calender" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Bookings",
        to: { name: "users-bookings-list" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Notifications",
        to: { name: "users-notification" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Users Added Consent Without Clinic",
        to: { name: "users-consent-form-without-clinic-user-list" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Users Added Consent Without Treatment",
        to: { name: "users-consent-form-without-treatment-user-list" },
      },

      {
        icon: { icon: "tabler-smart-home" },
        title: "Users Hair Prescription List",
        to: { name: "users-hair-prescription-list" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Hair Prescription Enrolled Users",
        to: { name: "users-hair-prescription-enrolled-users" },
      },
      {
        icon: { icon: "tabler-smart-home" },
        title: "Report",
        to: null,
        children: [
          {
            icon: { icon: "tabler-smart-home" },
            title: "Booking And Consent Forms",
            to: { name: "report-booking-and-consent-forms" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Clinic and treatments",
            to: { name: "report-clinic-and-treatments" },
          },
          {
            icon: { icon: "tabler-smart-home" },
            title: "Shop",
            to: { name: "report-shop" },
          },
        ],
      },
    ],
  },
];

export default users;
