<script setup>
import { UserRegisterAction } from "../../components/graphql/mutation/userRegister";
import { GetClinicListAction } from "../../components/graphql/query/getClinicList";
import { useGetClinicList } from "../../components/pinia/getClinicList";

const clinicsStore = useGetClinicList();
console.log("clinicsStoreclinicsStoreclinicsStore",clinicsStore?.page)
const { initGetClinicList } =
  GetClinicListAction();

const {initUserRegister,loading, error, data} =UserRegisterAction()  
const fetchClinics = () => {
  console.log(
    "initGetClinicListinitGetClinicListinitGetClinicListinitGetClinicList",clinicsStore?.page
  );
   initGetClinicList({
    page:(clinicsStore.page+1),
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
  confirmPassword: "Test@12345"
})
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
