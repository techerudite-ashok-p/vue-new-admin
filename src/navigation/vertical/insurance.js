import company from "../../assets/icon/svg/company.svg";
import insurancesss from "../../assets/icon/svg/insurance.svg";
import insuranceinquiry from "../../assets/icon/svg/insuranceinquiry.svg";

const insurance = [
  {
    to: null,
    title: "Insurance",
    icon: { icon: insurancesss },
    children: [
      {
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/insurances",
        },
        title: "Companies",
        icon: { icon: company },
      },
      {
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/insurances/reorder",
        },
        title: "Re-Order Companies",
        icon: { icon: company },
      },
      {
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/insurances-requests",
        },
        title: "Insurance Inquiries",
        icon: { icon: insuranceinquiry },
      },
      {
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/insync-insurances-requests",
        },
        title: "Insync Insurance Inquiries",
        icon: { icon: insuranceinquiry },
      },
      {
        to: null,
        title: "Faces Insurance",
        icon: { icon: company },
      },
      {
        to: null,
        title: "Faces Verified",
        icon: { icon: "tabler-smart-home" },
      },
      {
        to: {
          name: "insurances-expiry",
        },
        title: "Expiry",
        icon: { icon: company },
      },
    ],
  },
];

export default insurance;
