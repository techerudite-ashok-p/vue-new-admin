import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useGetClinicList } from "../../pinia/getClinicList";
import { GET_CLINIC_LIST_DATA } from "../../constants/getClinicList";

export const GET_CLINIC_LIST_QUERY = gql`
  query GetClinicList(
    $page: Int
    $limit: Int
    $search: String
    $isFeatured: Boolean
  ) {
    getClinicList(
      page: $page
      limit: $limit
      search: $search
      isFeatured: $isFeatured
    ) {
      success
      message
      data {
        items {
          clinicId
          name
          image
          averageReviews
          reviewCount
          cln_latitude
          cln_longitude
          clinic_distance
          address
          clinicSlug
          practitionerName
          ownerCompanyName
          clinicBuildingNo
          clinicStreet
          clinicCity
          clinicZipcode
        }
        total
        hasMore
      }
    }
  }
`;

export const GetClinicListAction = () => {
  console.log(
    "GetClinicListActionGetClinicListActionGetClinicListActionGetClinicListAction"
  );
  const clinictstore = useGetClinicList();

  const { result, fetchMore, loading, error } = useQuery(
    GET_CLINIC_LIST_QUERY,
    {
      fetchPolicy: "network-only",
      nextFetchPolicy: "network-only",
    }
  );

  const initGetClinicList = (variables) => {
    fetchMore(variables)
      .then((result) => {
        if (result?.data?.getClinicList?.success) {
          clinictstore.setClinicList({
            type: "GET_CLINIC_LIST_DATA",
            payload: result?.data?.getClinicList?.data,
          });
        }
      })
      .catch((err) => {
        console.log("errerrerrerrerr", err);
      });
  };
  return { initGetClinicList, result, loading, error };
};
