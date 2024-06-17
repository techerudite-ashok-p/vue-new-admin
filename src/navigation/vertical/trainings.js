import traning from "../../assets/icon/svg/traning.svg";
import traningcategories from "../../assets/icon/svg/traningcategary.svg";
import traningcouree from "../../assets/icon/svg/traningcouree.svg";
import traninginquiry from "../../assets/icon/svg/traninginquiry.svg";
import traninginstitude from "../../assets/icon/svg/traninginstitude.svg";
import traningreview from "../../assets/icon/svg/traningreview.svg";

const trainings = [
  {
    title: "Trainings",
    icon: { icon: traning },
    to: null,
    children: [
      {
        title: "Training Categories",
        icon: { icon: traningcategories },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-categories",
        },
      },
      {
        title: "Training Institutes",
        icon: { icon: traninginstitude },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-institutes",
        },
      },
      {
        title: "Courses",
        icon: { icon: traningcouree },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/trainings",
        },
      },
      {
        title: "Training Inquiries",
        icon: { icon: traninginquiry },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-inquiries",
        },
      },
      {
        title: "Training Reviews",
        icon: { icon: traningreview },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-reviews",
        },
      },
      {
        title: "Training Category Featured",
        icon: { icon: traningreview },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-category-featured",
        },
      },
      {
        title: "Training Accreditors",
        icon: { icon: traningreview },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-accreditors",
        },
      },
    ],
  },
];

export default trainings;
