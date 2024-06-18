import { useLazyQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useGetClinicList } from "../../pinia/getClinicList";

export const GET_CLINIC_LIST = gql`
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

  const { load, result, refetch } = useLazyQuery(GET_CLINIC_LIST, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
  });

  const initGetClinicList = async (variables) => {
    try {
      const { getClinicList } = await load(null, variables); // Call load with variables directly
      console.log("kfjghdfkhgjkdfhgh", getClinicList?.success);
      if (getClinicList?.success) {
        console.log("Clinic List Response:", getClinicList.data);
        clinictstore.setClinicList({
          type: "GET_CLINIC_LIST_DATA",
          payload: getClinicList?.data,
        });
        // Further processing with data if needed
      }
    } catch (error) {
      console?.log("Error fetching clinic list:", error);
    }
  };

  return { initGetClinicList };
};
