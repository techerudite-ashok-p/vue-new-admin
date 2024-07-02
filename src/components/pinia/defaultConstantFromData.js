import { defineStore } from "pinia";
import {
  DEFAULT_CONSTANT_FROM_DATA,
  DEFAULT_CONSTANT_FROM_DATA_CLEAN,
} from "../../components/constants/defaultConstantFromData";
export const useDefaultConstantFromData = defineStore(
  "defaultConstantFromData",
  {
    state: () => ({
      defaultConsentFromDataList: [],
      totalPage: 0,
      totalCount: 0,
      curPage: 0,
    }),
    actions: {
      setDefaultConstantFromData(action) {
        switch (action.type) {
          case DEFAULT_CONSTANT_FROM_DATA: {
            this.defaultConsentFromDataList = action?.payload?.admin_Data;
            this.totalPage = action?.payload?.totalPage;
            this.totalCount = action?.payload?.totalCount;
            this.curPage = this.curPage == 0 ? 1 : this.curPage + 1;
            break;
          }

          case DEFAULT_CONSTANT_FROM_DATA_CLEAN: {
            this.defaultConsentFromDataList = [];
            this.totalPage = null;
            this.totalCount = null;
            break;
          }
          default:
            return this;
        }
      },
    },
  }
);
