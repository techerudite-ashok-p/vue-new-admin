import alluser from "../../assets/icon/svg/alluser.svg";
import booking from "../../assets/icon/svg/bookings.svg";
import clenderUser from "../../assets/icon/svg/clenderUser.svg";
import clinicicon from "../../assets/icon/svg/clinicicon.svg";
import groups from "../../assets/icon/svg/groups.svg";
import manyClinic from "../../assets/icon/svg/manyclinic.svg";
import notifications from "../../assets/icon/svg/notifications.svg";
import usersicon from "../../assets/icon/svg/usericon.svg";

const users = [
  {
    title: "Users",
    icon: { icon: usersicon },
    to: null,
    children: [
      {
        icon: { icon: alluser },
        title: "All User",
        to: { path: process.env.VUE_API_BASE_URL + "/users" },
      },
      {
        icon: { icon: groups },
        title: "Groups",
        to: { path: process.env.VUE_API_BASE_URL + "/users/groups" },
      },
      {
        icon: { icon: clinicicon },
        title: "Clinics",
        to: null,
        children: [
          {
            icon: { icon: manyClinic },
            title: "Clinics",
            to: { path: process.env.VUE_API_BASE_URL + "/clinics" },
          },
          {
            icon: { icon: manyClinic },
            title: "Booking-Profile",
            to: {
              path: process.env.VUE_API_BASE_URL + "/clinics/booking-profiles",
            },
          },
          {
            icon: { icon: manyClinic },
            title: "Clinic-Reviews",
            to: { path: process.env.VUE_API_BASE_URL + "/clinic-reviews" },
          },
          {
            icon: { icon: manyClinic },
            title: "SEO Treatments",
            to: { path: process.env.VUE_API_BASE_URL + "/treatments-list" },
          },
          {
            icon: { icon: manyClinic },
            title: "Clinic Booking Requests",
            to: {
              path: process.env.VUE_API_BASE_URL + "/clinic-booking-requests",
            },
          },
          {
            icon: { icon: alluser },
            title: "Completed Profiles",
            to: {
              path: process.env.VUE_API_BASE_URL + "/completed-profiles",
            },
          },
        ],
      },
      {
        icon: { icon: clenderUser },
        title: "Calendar Users",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/calender",
        },
      },
      {
        icon: { icon: booking },
        title: "Bookings",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/bookings-list",
        },
      },
      {
        icon: { icon: notifications },
        title: "Notifications",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/notification",
        },
      },
      {
        icon: { icon: alluser },
        title: "Users Added Consent Without Clinic",
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/users/consent-form-without-clinic-user-list",
        },
      },
      {
        icon: { icon: alluser },
        title: "Users Added Consent Without Treatment",
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/users/consent-form-without-treatment-user-list",
        },
      },

      {
        icon: { icon: alluser },
        title: "Users Hair Prescription List",
        to: {
          path: process.env.VUE_API_BASE_URL + "/users/hair-prescription-list",
        },
      },
      {
        icon: { icon: alluser },
        title: "Hair Prescription Enrolled Users",
        to: {
          path:
            process.env.VUE_API_BASE_URL +
            "/users/hair-prescription-enrolled-users",
        },
      },
      {
        icon: { icon: clinicicon },
        title: "Report",
        to: null,
        children: [
          {
            icon: { icon: manyClinic },
            title: "Booking And Consent Forms",
            to: {
              path:
                process.env.VUE_API_BASE_URL +
                "/report/booking-and-consent-forms",
            },
          },
          {
            icon: { icon: manyClinic },
            title: "Clinic and treatments",
            to: {
              path:
                process.env.VUE_API_BASE_URL + "/report/clinic-and-treatments",
            },
          },
          {
            icon: { icon: manyClinic },
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
