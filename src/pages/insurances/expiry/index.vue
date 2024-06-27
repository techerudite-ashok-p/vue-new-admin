<script setup>
import { onMounted, computed, onUpdated } from "vue";
import { AdminDashBoardDataAction } from "../../../components/graphql/query/adminDashBoardData";
import { useAdminDashboardData } from "../../../components/pinia/adminDashBoardData";
import { VBtn } from "vuetify/lib/components/index.mjs";

// Initialize store
const adminDashboardDataStore = useAdminDashboardData();
const { initAdminDashboardData } = AdminDashBoardDataAction();

console.log(
  "adminDashboardDataStore",
  adminDashboardDataStore?.adminDataList.value,
  adminDashboardDataStore?.totalPage,
  adminDashboardDataStore?.totalCount,
  adminDashboardDataStore?.adminDataList
);

// Use computed properties to access store state

const headers = [
  {
    title: "User Name",
    key: "userName",
  },
  {
    title: "User Email",
    key: "userEmail",
  },
  {
    title: "User Phone No",
    key: "userPhoneNo",
    sortable: false,
  },
  {
    title: "Expiry Date",
    key: "expiryDate",
  },
  {
    title: "Pending Days",
    key: "pendingDays",
  },
];

onUpdated(() => {
  console.log(
    "adminDashboardDataStore",
    adminDashboardDataStore?.adminDataList.value,
    adminDashboardDataStore?.totalPage,
    adminDashboardDataStore?.totalCount,
    adminDashboardDataStore?.adminDataList
  );
});

const fetchData = () => {
  console.log("fjhdskjfhkjsdhfk");
  initAdminDashboardData({
    page: 1,
    limit: 10,
    search: null,
    dateRangeFilter: {
      filterType: "3_months",
    },
    isCsvRequire: true,
  });
  console.log(
    "adminDashboardDataStore",
    adminDashboardDataStore?.adminDataList.value,
    adminDashboardDataStore?.totalPage,
    adminDashboardDataStore?.totalCount,
    adminDashboardDataStore?.adminDataList
  );

};
</script>

<template>
  <div>
    <VCard title="Filters" class="mb-6">
      <VBtn v-on:click="fetchData">fsdfsdf</VBtn>
      <VCardText>
        <VCol cols="12" sm="4">
          <AppSelect placeholder="Status" clearable clear-icon="tabler-x" />
        </VCol>
      </VCardText>
    </VCard>
  </div>
</template>
