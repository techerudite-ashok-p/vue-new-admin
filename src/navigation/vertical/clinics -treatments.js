const clinicTreatmetnts = [
  {
    title: "Clinics & Treatments",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Clinics",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinics",
        },
      },
      {
        title: "SEO Treatments",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/treatments-list",
        },
      },
      {
        title: "Clinic Booking Requests",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinic-booking-requests",
        },
      },
      {
        title: "Clinic Reviews",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinic-reviews",
        },
      },
      {
        title: "Deleted Clinics",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinics/deleted-list",
        },
      },
    ],
  },
];

export default clinicTreatmetnts;
