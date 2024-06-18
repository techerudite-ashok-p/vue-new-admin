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
    setClinicList: (action) => {
      console.log("actionactionaction", action);
      switch (action?.type) {
        case GET_CLINIC_LIST_DATA: {
          console.log(
            "GET_CLINIC_LIST_DATAGET_CLINIC_LIST_DATAGET_CLINIC_LIST_DATA",
            action.payload,
            initialState // Access state through context
          );
          return {
            ...initialState, // Spread existing state
            hasMore: action?.payload?.hasMore,
            clinicList: initialState?.clinicList.concat(action?.payload?.items),
            total: action?.payload?.total,
            page: initialState?.page + 1,
          };
        }
        default:
          return context.state; // Always return state object
      }
    },
  },
});
