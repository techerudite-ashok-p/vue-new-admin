<script setup>
import { GetClinicListAction } from "../../components/graphql/query/getClinicList";
import { useGetClinicList } from "../../components/pinia/getClinicList";

const clinicsStore = useGetClinicList();
console.log("clinicsStore",clinicsStore.$state)
const { initGetClinicList } =
  GetClinicListAction();
const fetchClinics = () => {
  console.log(
    "initGetClinicListinitGetClinicListinitGetClinicListinitGetClinicList"
  );
  let page = 0
  initGetClinicList({
    page: ++page,
    limit: 10,
    search: "",
    isFeatured: false,
  });
};
</script>

<template>
  <div>
    <VCard title="Create Awesome 🙌">
      <VCardText>This is your second page.fdgfdg</VCardText>
      <VBtn @click="fetchClinics" color="primary">Fetch Clinics</VBtn>
      <VCardText>
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer
        tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
      </VCardText>
    </VCard>
  </div>
</template>
