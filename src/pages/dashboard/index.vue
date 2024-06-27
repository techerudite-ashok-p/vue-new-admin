<script setup>
import { UserRegisterAction } from "../../components/graphql/mutation/userRegister";
import { GetClinicListAction } from "../../components/graphql/query/getClinicList";
import { useGetClinicList } from "../../components/pinia/getClinicList";
import DashboardCard from "../../common/card/DashboardCard.vue";

const clinicsStore = useGetClinicList();
const { initGetClinicList } = GetClinicListAction();

const { initUserRegister, loading, error, data } = UserRegisterAction();
const fetchClinics = () => {
  console.log("clinicsStore", clinicsStore.page);
  initGetClinicList({
    page: clinicsStore.page + 1,
    limit: 10,
    search: "",
    isFeatured: false,
  });
  initUserRegister({
    email: "pas285@yopmail.com",
    password: "Test@12345",
    fname: "Test",
    lname: "Test",
    number: "123465487990",
    confirmPassword: "Test@12345",
  });
};

const DashboardData = [
  {
    title: "Users",
    value: 6002,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Phorest Users",
    value: 44,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Clinics",
    value: 2370,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Client Forms",
    value: 8724,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Consent Forms",
    value: 12496,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Vendors",
    value: 227,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Products",
    value: 951,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Orders Count",
    value: 2225,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Orders Commissions",
    value: "£ 228499.76",
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Deposit Commissions",
    value: "£ 8190.68",
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Prescription Fees",
    value: "£ 18869.71",
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Prescription Orders",
    value: 1625,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Client Subscription Fees",
    value: "£ 25748807.43",
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Shop Unpaid Total Amount",
    value: 92,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Unprocessed Prescription Count",
    value: 92,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Unprocessed Prescription Total",
    value: "£ 41086.77",
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Completed Clinic Profiles",
    value: 129,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Partial Clinic Profiles",
    value: 125,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Incomplete Clinic Profiles",
    value: 2115,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Total completed websites",
    value: 354,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  { title: "In progress websites", value: 964, color: "primary" },
  {
    title: "Thank You Page Orders Count",
    value: 16,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
  {
    title: "Thank You Page Prescription Orders",
    value: 7,
    color: "primary",
    isHover: false,
    icon: "tabler-credit-card",
  },
];
const onConsole = (param) => {
  console.log("good morning ", param);
};
console.log("DashboardDataDashboardData", DashboardData);
</script>

<template>
  <div>
    <VRow class="match-height">
      <VCol
        cols="12"
        md="3"
        sm="6"
        v-for="(item, index) in DashboardData"
        :key="index"
      >
        <DashboardCard
          :icon="item.icon"
          :color="item.color"
          :title="item.title"
          :value="item.value"
          :isHover="item.isHover"
          :onConsole="onConsole"
        />
      </VCol>
    </VRow>

    <VBtn @click="fetchClinics" color="primary">Fetch Clinics</VBtn>
  </div>
</template>

<style scoped>
.match-height {
  height: 100%;
}
</style>
