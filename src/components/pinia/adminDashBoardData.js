import { defineStore } from "pinia";
import {
  ADMIN_DASHBOARD_DATA,
  ADMIN_DASHBOARD_DATA_CLEAR,
} from "../constants/adminDashBoardData";

export const useAdminDashboardData = defineStore("adminDashBoardData", {
  state: () => ({
    adminDataList: [],
    totalPage: 0,
    totalCount: 0,
  }),
  actions: {
    setAdminDashboardData(action) {
      console.log("ADMIN_DASHBOARD_DATA", action);
      switch (action?.type) {
        case ADMIN_DASHBOARD_DATA: {
          console.log("actionactionactionaction", action);
          this.adminDataList = this?.adminDataList?.concat(
            action?.payload?.admin_Data
          );
          this.totalPage = action?.payload?.totalPage;
          this.totalCount = action?.payload?.totalCount;
          console.log("thisthisthisthis", this.adminDataList, this.state);
          break;
        }
        // case ADMIN_DASHBOARD_DATA_CLEAR:
        //   {
        //     this.adminDataList = [];
        //     this.totalPage = null;
        //     this.totalCount = null;
        //     break;
        //   }
        //   console.log("ADMIN_DASHBOARD_DATA_CLEAR", this, this.$state);

        default:
          return this;
      }
    },
  },
});
