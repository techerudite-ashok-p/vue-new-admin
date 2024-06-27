import { useLazyQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ADMIN_DASHBOARD_DATA } from "../../constants/adminDashBoardData";
import { useAdminDashboardData } from "../../pinia/adminDashBoardData";

const ADMIN_DASHBOARD_DATA_QUERY = gql`
  query AdminDashBoardData(
    $page: Int
    $search: String
    $limit: Int
    $dateRangeFilter: DateRangeFilterInput
    $customDateRange: CustomDateRangeInput
    $isCsvRequire: Boolean
  ) {
    adminDashBoardData(
      page: $page
      search: $search
      limit: $limit
      dateRangeFilter: $dateRangeFilter
      customDateRange: $customDateRange
      isCsvRequire: $isCsvRequire
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
      }
    }
  }
`;

export const AdminDashBoardDataAction = () => {
  const adminDataListStore = useAdminDashboardData();
  const {
    load: loadQuery,
    loading,
    error,
    data,
    refetch,
  } = useLazyQuery(ADMIN_DASHBOARD_DATA_QUERY);

  const fetchOrRefetch = async (variables) => {
    return await loadQuery(null, variables);
  };

  const initAdminDashboardData = (variables) => {
    // const { adminDashBoardData } = await
    fetchOrRefetch(variables)
      .then((response) => {
        console.log("responseresponseresponseresponse", response);
        if (response?.adminDashBoardData?.success) {
          adminDataListStore.setAdminDashboardData({
            type: ADMIN_DASHBOARD_DATA,
            payload: response?.adminDashBoardData?.data,
          });
        } else {
          console.log("err", response?.adminDashBoardData.message);
        }
      })
      .catch((err) => {
        console.log("errrr", err);
      });

    // if (adminDashBoardData.success) {
    //   adminDataListStore.setAdminDashboardData({
    //     type: ADMIN_DASHBOARD_DATA,
    //     payload: adminDashBoardData?.data,
    //   });
    // }else{

    // }
    // console.log(
    //   "adminDashBoardDataadminDashBoardData",
    //   adminDashBoardData,
    //   adminDashBoardData.success
    // );
  };
  return { initAdminDashboardData, loading, error, data };
};
