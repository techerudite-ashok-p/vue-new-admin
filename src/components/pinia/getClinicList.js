import { defineStore } from "pinia";
import { GET_CLINIC_LIST_DATA } from "../action/getClinicList";

let initialState = {
  clinicList: [],
  total: null,
  page: 0,
  hasMore: true,
};

export const useGetClinicList = defineStore("getClinicList", {
  state: () => ({
    ...initialState,
  }),
  actions: {
    setClinicList(action) {
      console.log("actionactionaction", action);
      switch (action?.type) {
        case GET_CLINIC_LIST_DATA: {
          console.log(
            "GET_CLINIC_LIST_DATAGET_CLINIC_LIST_DATAGET_CLINIC_LIST_DATA",
            action.payload,
            this // Access state through `this` in Pinia
          );
          // Mutate state directly
          this.hasMore = action?.payload?.hasMore;
          this.clinicList = this.clinicList.concat(action?.payload?.items);
          this.total = action?.payload?.total;
          this.page = this.page + 1;
          break;
        }

        default:
          return this; // Always return state object
      }
    },
  },
});
