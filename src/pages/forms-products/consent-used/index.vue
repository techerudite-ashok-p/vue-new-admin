<script setup>
import { watch } from "vue";
import { DefaultConstantFromDataAction } from "@/components/graphql/query/defaultConstantFromData";
import { useDefaultConstantFromData } from "@/components/pinia/defaultConstantFromData";

//*****************PINIA ADMIN DASHBOARD DATA STORE *****************//
// Initialize store
const defaultConstantFromDataStore = useDefaultConstantFromData();

//***************** GRAPHQL QUERY *****************//
// api action graphql
const { initDefaultConstantFromData } = DefaultConstantFromDataAction();

//*****************CONSTANT STATE *****************//
//table header constant array
const headers = [
  {
    title: "Default Consent Form Name",
    key: "defaultConsentFormName",
    sortable: false,
  },
  {
    title: "Used Count",
    key: "usedCount",
    sortBy: ["", "asc", "desc"],
  },
];

//*****************MUTABLE STATE  REACTIVE STATE*****************//
const dateRangefilter = ref("");
const searchQuery = ref("");
const itemsPerPage = ref(10);
const page = ref(1);
const orderBy = ref("");

//*****************USE IN FUNCTION *****************//
const fetchData = () => {
  initDefaultConstantFromData({
    page: page.value,
    limit: itemsPerPage.value,
    search: searchQuery.value,
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
    sortByCount: orderBy.value,
  });
};

const updateOptions = () => {
  console.log("orderBy.value", orderBy.value);
  orderBy.value == ""
    ? (orderBy.value = "asc")
    : orderBy.value == "asc"
    ? (orderBy.value = "desc")
    : orderBy.value == "desc"
    ? (orderBy.value = "")
    : (orderBy.value = "asc");
};

//*****************VUE HOOK USED *****************//
watch(
  [dateRangefilter, searchQuery, itemsPerPage, page, orderBy],
  () => {
    // defaultConstantFromDataStore.setDefaultConstantFromData({
    //   type: DEFAULT_CONSTANT_FROM_DATA_CLEAN,
    // });
    fetchData();
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <VCard class="mb-6">
      <VCardText>
        <h1>Used Count Of Default Consent Forms</h1>
      </VCardText>
    </VCard>
    <VCard title="Filters" class="mb-6">
      <VCardText>
        <VRow>
          <VCol cols="12" sm="4">
            <AppTextField
              v-model="searchQuery"
              placeholder="Search User"
              class="me-3"
              clearable
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
          <VCol cols="12" sm="4">
            <AppSelect
              v-model="itemsPerPage"
              :items="[5, 10, 20, 25, 50, 100]"
              style="max-inline-size: 100px; min-inline-size: 100px"
            />
          </VCol>
        </VRow>
      </VCardText>
      <VDivider class="mt-4" />
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="defaultConstantFromDataStore?.defaultConsentFromDataList"
        :items-length="defaultConstantFromDataStore?.totalCount"
        :headers="headers"
        class="text-no-wrap"
        @update:sortBy="updateOptions"
      >
        <template #item.defaultConsentFormName="{ item }">
          <span class="text-body-1 text-high-emphasis">{{
            item.constantFromName || ""
          }}</span>
        </template>
        <template #item.usedCount="{ item }">
          <span class="text-body-1 text-high-emphasis">{{
            item?.constantFromCount || ""
          }}</span>
        </template>
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="defaultConstantFromDataStore.totalCount"
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>
