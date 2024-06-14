const trainings = [
  {
    title: "Trainings",
    icon: { icon: "tabler-smart-home" },
    to: null,
    children: [
      {
        title: "Training Categories",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-categories",
        },
      },
      {
        title: "Training Institutes",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-institutes",
        },
      },
      {
        title: "Courses",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/trainings",
        },
      },
      {
        title: "Training Inquiries",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-inquiries",
        },
      },
      {
        title: "Training Reviews",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-reviews",
        },
      },
      {
        title: "Training Category Featured",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-category-featured",
        },
      },
      {
        title: "Training Accreditors",
        icon: { icon: "tabler-smart-home" },
        to: {
          path: process?.env?.VUE_API_BASE_URL + "/training-accreditors",
        },
      },
    ],
  },
];

export default trainings;
