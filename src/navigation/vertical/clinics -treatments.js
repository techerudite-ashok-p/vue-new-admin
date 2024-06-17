import clinicicon from "../../assets/icon/svg/clinicicon.svg";
import manyclinic from "../../assets/icon/svg/manyclinic.svg";

const clinicTreatmetnts = [
  {
    title: "Clinics & Treatments",
    icon: { icon: clinicicon },
    to: null,
    children: [
      {
        title: "Clinics",
        icon: { icon: manyclinic },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinics",
        },
      },
      {
        title: "SEO Treatments",
        icon: { icon: manyclinic },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/treatments-list",
        },
      },
      {
        title: "Clinic Booking Requests",
        icon: { icon: manyclinic },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinic-booking-requests",
        },
      },
      {
        title: "Clinic Reviews",
        icon: { icon: manyclinic },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinic-reviews",
        },
      },
      {
        title: "Deleted Clinics",
        icon: { icon: manyclinic },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/clinics/deleted-list",
        },
      },
    ],
  },
];

export default clinicTreatmetnts;
