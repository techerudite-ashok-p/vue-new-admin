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
    curPage: 0,
  }),
  actions: {
    setAdminDashboardData(action) {
      switch (action?.type) {
        case ADMIN_DASHBOARD_DATA: {
          this.adminDataList = action?.payload?.admin_Data;
          this.totalPage = action?.payload?.totalPage;
          this.totalCount = action?.payload?.totalCount;
          this.curPage = this.curPage == 0 ? 1 : this.curPage + 1;
          break;
        }
        case ADMIN_DASHBOARD_DATA_CLEAR: {
          this.adminDataList = [];
          this.totalPage = null;
          this.totalCount = null;
          break;
        }

        default:
          return this;
      }
    },
  },
});
