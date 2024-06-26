<template>
  {{ console.log("datadatadata",data) }}
  <div>
    <VCard title="Create Awesome 🙌">
      <VCardText>This is your second page.fdgfdg</VCardText>
      <VCardText>
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer
        tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
      </VCardText>
    </VCard>
    <VBtn @click="getdata">getdata</VBtn>
    <input placeholder="email" v-model="data.eamil" />
    <input placeholder="Password" v-model="data.password" type="password" />
    <div v-for="(item, index) in checkBoxData">
      <label :for="item.titel">{{ item.titel }}</label>
      <input
        type="checkbox"
        :name="item.titel"
        :id="item.titel"
        :value="item"
        v-model="data.selectedItem"
      />
    </div>
    <div v-for="(item, index) in radioData" :key="index">
      <label :for="item.value">{{ item.value }}</label>
      <input
        type="radio"
        name="radio"
        :id="item.value"
        :value="item.value"
        v-model="data.radioSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const data = ref({
  email: "",
  password: "",
  selectedItem: [],
  radioSelect: "",
});
const checkBoxData = [
  { value: "java", titel: "java" },
  { value: "React", titel: "React" },
  { value: "HTML", titel: "HTML" },
  { value: "css", titel: "css" },
];
const radioData = [
  { value: "java", name: "radio" },
  { value: "React", name: "radio" },
  { value: "HTML", name: "radio" },
  { value: "css", name: "radio" },
];
console.log("dfsdlfjl", data.value.email, data.value.email);
const getdata = () => {
  console.log(
    "datadatadata",
    data.value.email,
    data.value.password,
    data.value.selectedItem,
    data.value.radioSelect
  );
};
onMounted(() => {
  console.log("Component mounted.");
});
watch(
  () => data.value.radioSelect,
  (value, prevalue) => {
    console.log("value, prevalue", value, prevalue);
    value = "dhfgsjdgfksdfhskdhfksdhkfhdskfhkjsdhk";
    console.log("value, prevalue", value, prevalue);
  }
);
</script>
