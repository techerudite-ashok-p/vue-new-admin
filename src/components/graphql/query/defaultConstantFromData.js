import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useDefaultConstantFromData } from "../../pinia/defaultConstantFromData";
import { DEFAULT_CONSTANT_FROM_DATA } from "../../constants/defaultConstantFromData";

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
  const store = useDefaultConstantFromData();
  const { loading, error, data, refetch, onResult, onError } = useQuery(
    DEFAULT_CONSTANT_FROM_DATA_QUERY,
    {
      page: 1,
      limit: 10,
      search: "",
      customDateRange: {
        endDate: "",
        startDate: "",
      },
      sortByCount: "",
    },
    {
      fetchPolicy: "network-only",
      nextFetchPolicy: "network-only",
    }
  );

  onResult((resonse) => {
    console.log("resonseresonseresonse", resonse);
    store.setDefaultConstantFromData({
      type: DEFAULT_CONSTANT_FROM_DATA,
      payload: resonse,
    });
    if (resonse?.data?.defaultConstantFromData?.success) {
      console.log(
        "defaultConstantFromData",
        resonse?.data?.defaultConstantFromData?.data
      );
      store.setDefaultConstantFromData({
        type: DEFAULT_CONSTANT_FROM_DATA,
        payload: resonse?.data?.defaultConstantFromData?.data,
      });
    } else {
      console.error(
        "Query error:",
        resonse?.data?.defaultConstantFromData.message
      );
    }
  });

  onError((err) => {
    console.error("Query error:", err);
  });

  const initDefaultConstantFromData = (variables) => {
    refetch(variables);
  };
  return { initDefaultConstantFromData };
};
