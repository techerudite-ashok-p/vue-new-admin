import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const DEFAULT_CONSTANT_FROM_DATA_QUERY = gql`
  query DefaultConstantFromData(
    $page: Int
    $limit: Int
    $search: String
    $customDateRange: CustomDateRange
    $sortByCount: String
  ) {
    defaultConstantFromData(
      page: $page
      limit: $limit
      search: $search
      customDateRange: $customDateRange
      sortByCount: $sortByCount
    ) {
      success
      message
      data {
        admin_Data {
          constantFromName
          constantFromCount
        }
        totalCount
        totalPage
      }
    }
  }
`;

export const DefaultConstantFromDataAction = () => {
  const { loading, error, data, refetch, onResult, onError } = useQuery(
    DEFAULT_CONSTANT_FROM_DATA_QUERY,
    {
      fetchPolicy: "network-only",
      nextFetchPolicy: "network-only",
    }
  );

  onResult((resonse)=>{
    console.log("resonseresonseresonse",resonse)
  })

  onError((err) => {
    console.error("Query error:", err, context);
  });

  const initDefaultConstantFromData = (variables)={
        refetch(variables)
  }
  return {initDefaultConstantFromData}
};
