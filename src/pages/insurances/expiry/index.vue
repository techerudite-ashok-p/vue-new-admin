<script setup>
import { onMounted, computed, onUpdated, ref } from "vue";
import { AdminDashBoardDataAction } from "../../../components/graphql/query/adminDashBoardData";
import { useAdminDashboardData } from "../../../components/pinia/adminDashBoardData";
import { VBtn } from "vuetify/lib/components/index.mjs";
import dayjs from "dayjs";
import { ADMIN_DASHBOARD_DATA_CLEAR } from "../../../components/constants/adminDashBoardData";

//*****************CONSTANT STATE *****************//

//constant data use in month select
const selectMonthList = ref([
  {
    title: "3 month",
    value: "3_months",
  },
  {
    title: "6 month",
    value: "6_months",
  },
  {
    title: "9 month",
    value: "9_months",
  },
]);

//table header constant array
const headers = [
  {
    title: "User Name",
    key: "userName",
    sortable: false,
  },
  {
    title: "User Email",
    key: "userEmail",
    sortable: false,
  },
  {
    title: "User Phone No",
    key: "userPhoneNo",
    sortable: false,
  },
  {
    title: "Expiry Date",
    key: "expiryDate",
    sortable: false,
  },
  {
    title: "Pending Days",
    key: "pendingDays",
    sortable: false,
  },
];

//*****************PINIA ADMIN DASHBOARD DATA STORE *****************//

// Initialize store
const adminDashboardDataStore = useAdminDashboardData();

//***************** GRAPHQL QUERY *****************//
// api action graphql
const { initAdminDashboardData } = AdminDashBoardDataAction();

//*****************MUTABLE STATE  REACTIVE STATE*****************//
const selectMonthRange = ref();
const dateRangefilter = ref("");
const searchQuery = ref("");
const itemsPerPage = ref(10);
const page = ref(1);
const isCsvRequire = ref(false);

//*****************USE IN FUNCTION *****************//
const fetchData = () => {
  console.log(
    "dateRangefilterdateRangefilterdateRangefilter",
    itemsPerPage.value,
    isCsvRequire.value,
    dateRangefilter.value
  );
  initAdminDashboardData(
    {
      page: page?.value,
      limit: itemsPerPage?.value,
      search: searchQuery?.value,
      dateRangeFilter: {
        filterType: selectMonthRange?.value ? selectMonthRange?.value : "",
      },
      isCsvRequire: isCsvRequire.value,
      customDateRange: {
        endDate:
          dateRangefilter?.value?.split(" to ")[0] &&
          dateRangefilter?.value?.split(" to ")[1]
            ? dateRangefilter?.value?.split(" to ")[1]
            : "",
        startDate:
          dateRangefilter?.value?.split(" to ")[0] &&
          dateRangefilter?.value?.split(" to ")[1]
            ? dateRangefilter?.value?.split(" to ")[0]
            : "",
      },
    },
    async (result) => {
      const response = await fetch(result.downloadUrl);
      const csvText = await response.text();
      const encodedCsv = encodeURIComponent(csvText);
      const dataUrl = `data:text/csv;charset=utf-8,${encodedCsv}`;
      const newTab = window.open(dataUrl, "_blank");
    }
  );
  isCsvRequire.value = false;
};

const onExportData = () => {
  isCsvRequire.value = true;
  fetchData();
};

//*****************VUE HOOK USED *****************//
watch(
  [selectMonthRange, dateRangefilter, searchQuery, itemsPerPage, page],
  () => {
    console.log(" dateRangefilter?.value", dateRangefilter?.value);
    adminDashboardDataStore.setAdminDashboardData({
      type: "ADMIN_DASHBOARD_DATA_CLEAR",
    });
    fetchData();
  },
  { immediate: true }
);

onUpdated(() => {
  console.log(
    "dateRangefilter525252",
    dateRangefilter?.value,
    dateRangefilter.value.split(" to ")
  );
});
</script>

<template>
  <div>
    <VCard title="Filters" class="mb-6">
      <VCardText>
        <VRow>
          <VCol cols="12" sm="4">
            <AppSelect
              v-model="selectMonthRange"
              placeholder="Select Month"
              :items="selectMonthList"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <VCol cols="12" sm="4">
            <AppDateTimePicker
              v-model:model-value="dateRangefilter"
              placeholder="Start Date to End Date"
              clearable
              :config="{ mode: 'range' }"
            />
          </VCol>
        </VRow>
      </VCardText>
      <VDivider />
      <div class="d-flex flex-wrap gap-4 ma-6">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <AppTextField
            v-model="searchQuery"
            placeholder="Search User"
            style="inline-size: 200px"
            class="me-3"
            clearable
          />
        </div>

        <VSpacer />
        <div class="d-flex gap-4 flex-wrap align-center">
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50, 100]"
            style="max-inline-size: 100px; min-inline-size: 100px"
          />
          <!-- 👉 Export button -->
          <VBtn
            variant="tonal"
            color="secondary"
            prepend-icon="tabler-upload"
            v-on:click="onExportData"
          >
            Export
          </VBtn>
        </div>
      </div>
      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      {{
        console.log(
          "itemsPerPage",
          itemsPerPage,
          adminDashboardDataStore?.adminDataList
        )
      }}
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        :items="adminDashboardDataStore?.adminDataList"
        :items-length="adminDashboardDataStore?.totalCount"
        class="text-no-wrap"
      >
        <!-- category -->
        <template #item.userName="{ item }">
          {{ console.log("itemitemitemitemitemitem", item) }}
          <span class="text-body-1 text-high-emphasis">{{
            `${item.usr_fname} ${item.usr_lname}`
          }}</span>
        </template>
        <template #item.userEmail="{ item }">
          {{ console.log("itemitemitemitemitemitem2525252", item) }}
          <span class="text-body-1 text-high-emphasis">{{
            item.usr_email
          }}</span>
        </template>
        <template #item.userPhoneNo="{ item }">
          {{ console.log("itemitemitemitemitemitem", item) }}
          <span class="text-body-1 text-high-emphasis">{{
            item.usr_phone_no
          }}</span>
        </template>
        <template #item.expiryDate="{ item }">
          {{ console.log("itemitemitemitemitemitem", item) }}
          <span class="text-body-1 text-high-emphasis">{{
            dayjs(item.uid_expire).format("DD-MM-YYYY")
          }}</span>
        </template>

        <template #item.pendingDays="{ item }">
          {{ console.log("itemitemitemitemitemitem", item) }}
          <span class="text-body-1 text-high-emphasis">{{
            item.pendingDays
          }}</span>
        </template>

        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="adminDashboardDataStore?.totalCount"
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>
