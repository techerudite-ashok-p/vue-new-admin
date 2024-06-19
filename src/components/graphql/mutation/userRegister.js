import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const USER_REGISTER_MUTATION = gql`
  mutation UserRegister(
    $email: String!
    $password: String!
    $confirmPassword: String!
    $fname: String
    $lname: String
    $number: String
  ) {
    userRegister(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      fname: $fname
      lname: $lname
      number: $number
    ) {
      success
      message
      data {
        user {
          usr_id
          usr_fname
          usr_lname
          usr_name
          usr_email
          usr_email_verified
          usr_country_name
          usr_country_code
          usr_phone_no
          usr_phone_country
          usr_phone_verified
          usr_dob
          usr_last_login
          usr_last_login_type
          usr_country
          usr_company_name
          usr_no_of_employees
          usr_vat_no
          userRoles
          image_url
          house_no
          street_name
          city
          post_code
          user_country_code
          booking_link
          occupations
        }
        email_exists
        token
        email_verified
        affiliation
      }
    }
  }
`;

export const UserRegisterAction = () => {
  const {
    mutate: userRegisterFunction,
    loading,
    error,
    data,
  } = useMutation(USER_REGISTER_MUTATION);

  const initUserRegister = async (variables) => {
    try {
      await userRegisterFunction(variables);
    } catch (e) {
      console?.log("Registration error:", e);
    }
  };
  console.log("loadingerrordata", initUserRegister, loading, error, data);

  return { initUserRegister, loading, error, data };
};
