import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ADMIN_DASHBOARD_DATA } from "../../constants/adminDashBoardData";
import { useAdminDashboardData } from "../../pinia/adminDashBoardData";

const ADMIN_DASHBOARD_DATA_QUERY = gql`
  query AdminDashBoardData(
    $page: Int
    $limit: Int
    $isCsvRequire: Boolean
    $customDateRange: CustomDateRangeInput
    $search: String
    $dateRangeFilter: DateRangeFilterInput
  ) {
    adminDashBoardData(
      page: $page
      limit: $limit
      isCsvRequire: $isCsvRequire
      customDateRange: $customDateRange
      search: $search
      dateRangeFilter: $dateRangeFilter
    ) {
      success
      message
      data {
        admin_Data {
          usr_fname
          usr_lname
          usr_email
          usr_phone_no
          uid_expire
          pendingDays
        }
        totalCount
        totalPage
        downloadUrl
      }
    }
  }
`;

export const AdminDashBoardDataAction = () => {
  const adminDataListStore = useAdminDashboardData();
  const { loading, error, data, refetch, onResult, onError } = useQuery(
    ADMIN_DASHBOARD_DATA_QUERY,
    {
      page: 1,
      limit: 10,
      isCsvRequire: false,
      customDateRange: {
        endDate: "",
        startDate: "",
      },
      search: "",
      dateRangeFilter: {
        filterType: "",
      },
    },
    {
      fetchPolicy: "network-only",
      nextFetchPolicy: "network-only",
    }
  );

  onResult((result) => {
    console.log("resultresultresultresultresult", result);
    if (result?.data?.adminDashBoardData?.success) {
      adminDataListStore.setAdminDashboardData({
        type: ADMIN_DASHBOARD_DATA,
        payload: result?.data?.adminDashBoardData?.data,
      });
    } else {
      console.log("error", result?.data?.adminDashBoardData?.message);
    }
  });

  onError((err) => {
    console.error("Query error:", err, context);
  });

  const initAdminDashboardData = (variables, successCallback) => {
    refetch(variables)
      .then((resonse) => {
        console.log(
          "resultresult",
          resonse,
          resonse.data.adminDashBoardData.success
        );
        if (resonse?.data?.adminDashBoardData?.success) {
          successCallback(resonse?.data?.adminDashBoardData?.data);
        }
      })
      .catch((err) => {
        console.log("errerrerrerrerrerr", err);
      });
  };

  return { initAdminDashboardData, loading, error, data };
};
