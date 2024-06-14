import allUser from "../../assets/icon/svg/alluser.svg";
import clinicicon from "../../assets/icon/svg/clinicicon.svg";
import clinicsubcriber from "../../assets/icon/svg/clinicsubcriber.svg";
import deposite from "../../assets/icon/svg/deposite.svg";
import manyClinic from "../../assets/icon/svg/manyclinic.svg";
import usericon from "../../assets/icon/svg/usericon.svg";

const booking = [
  {
    title: "Booking",
    icon: { icon: usericon },
    to: null,
    children: [
      {
        title: "No. Booking",
        icon: { icon: clinicicon },
        to: null,
        children: [
          {
            title: "No. Booking",
            icon: { icon: manyClinic },
            to: null,
          },
          {
            title: "Deposits",
            icon: { icon: deposite },
            to: { path: process.env.VUE_API_BASE_URL + "/deposits" },
          },
          {
            title: "Client Subscriptions",
            icon: { icon: clinicsubcriber },
            to: {
              path: process.env.VUE_API_BASE_URL + "/client-subscriptions",
            },
          },
        ],
      },
      {
        title: "No. Calendar input",
        icon: { icon: allUser },
        to: null,
      },
    ],
  },
];

export default booking;
