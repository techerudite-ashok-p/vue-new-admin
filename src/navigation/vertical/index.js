import dashboard from "./dashboard";
import stripe from "./stripe";
import users from "./users";

export default [
  {
    title: "Home",
    to: { name: "root" },
    icon: { icon: "tabler-smart-home" },
  },
  {
    title: "Second page",
    to: { name: "second-page" },
    icon: { icon: "tabler-file" },
  },
  ...dashboard,
  ...users,
  ...stripe,
];
