<script setup>
import { useGetClinicList } from "../components/pinia/getClinicList";

const clinicsStore = useGetClinicList();
console.log("clinicsStorefgdfgdfg",clinicsStore.$state,clinicsStore?.page)
</script>


<template>
  <div>
    <VCard title="Create Awesome 🙌">
      <VCardText>This is your second page.fdgfdg</VCardText>
      <VCardText>
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
        wafer tart marzipan bonbon. Gingerbread jelly-o dragée
        chocolate.
      </VCardText>
    </VCard>
  </div>
</template>
