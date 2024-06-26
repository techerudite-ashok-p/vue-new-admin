<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";

const matchIndex = ref(-1);

const data = ref({
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
  mobileNumber: "",
  langauge: [],
  registerType: "",
  gender: "",
});
console.log("matchIndex", matchIndex.value);

const userData = ref([]);

const validation = (key, value) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  const mobileNumberRegex = /^\+?[1-9]\d{1,14}$/;
  const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  switch (key) {
    case "name":
      if (value.length > 1) {
        return;
      } else {
        return "Please valid name";
      }
      break;
    case "email":
      if (!simpleEmailRegex.test(value)) {
        return "Please valid email";
      } else {
        return;
      }
      break;
    case "surname":
      if (value.length > 1) {
        return;
      } else {
        return "Please valid surname";
      }
      break;
    case "password":
      if (!passwordRegex.test(value)) {
        return "Please valid password";
      } else {
        return;
      }
      break;
    case "confirmPassword":
      if (data.value.password !== value) {
        return "Please valid confirmPassword";
      } else {
        return;
      }
      break;
    case "mobileNumber":
      if (!mobileNumberRegex.test(value)) {
        return "Please valid mobile number";
      } else {
        return;
      }
      break;
    case "langauge":
      console.log("langaugelangaugelangaugelangauge", value.length, value);
      if (value.length > 0) {
        return;
      } else {
        return "Please select langauge";
      }
      break;
    case "gender":
      if (value.length > 1) {
        return;
      } else {
        return "Please select gender";
      }
      break;
    case "registerType":
      if (value.length > 1) {
        return;
      } else {
        return "Please select registerType";
      }
      break;
    default:
      break;
  }
};

onMounted(() => {
  const data = localStorage.getItem("userData");
  console.log("datadata", data);
  if (data?.length > 0) {
    return (userData.value = JSON.parse(data));
  }
  console.log("userDatauserDatauserDatauserDatauserData", userData);
});

const error = ref({});

const onSubmit = () => {
  console.log("fdkfhksdhf", data.value);
  let errorData = {};

  Object.keys(data.value).forEach((key) => {
    const errorMessage = validation(key, data.value[key]);
    if (errorMessage) {
      errorData[key] = errorMessage;
    }
  });
  if (Object.keys(errorData).length) {
    error.value = errorData;
  } else {
    error.value = {};
  }
  if (Object.keys(error.value).length === 0) {
    if (matchIndex.value === -1) {
      console.log("userData?.value", userData?.value);
      userData.value.push({ ...data.value });
      console.log("userData.valueuserData.value", userData, userData.value);
      // Save to local storage
      localStorage?.setItem("userData", JSON.stringify(userData.value));
      Object.keys(data.value).forEach((key) => {
        if (Array.isArray(data.value[key])) {
          data.value[key] = [];
        } else {
          data.value[key] = "";
        }
      });
    } else {
      console.log("MATCHINDEX", userData.value[matchIndex], data.value);
      userData.value[matchIndex.value] = { ...data.value };
      console.log("edite user data", userData.value);
      localStorage?.setItem("userData", JSON.stringify(userData.value));
      Object.keys(data.value).forEach((key) => {
        if (Array.isArray(data.value[key])) {
          data.value[key] = [];
        } else {
          data.value[key] = "";
        }
      });
      matchIndex.value = -1;
    }
  } else {
    console.log("Form has errors:", error.value);
  }
  console.log("userDatauserData", userData.value, data.value);
};

const onDelete = (deleteIndex) => {
  console.log("before delete", userData.value);
  userData.value.splice(deleteIndex, 1);
  console.log("after delete", userData.value);
  localStorage.setItem("userData", JSON.stringify(userData.value));
};

const onEdit = (editIndex) => {
  const editUser = userData.value.find((v, i) => i === editIndex);
  data.value = editUser;
  matchIndex.value = editIndex;
  console.log("matchIndex", matchIndex.value);
};
</script>

<template>
  <div class="main-container">
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/second-page">About</RouterLink>

      <!-- Route Outlet -->
    </div>
    <div class="container-div">
      <div class="name-surname">
        <div class="diplayname">
          <AppTextField
            autofocus
            label="Name"
            type="text"
            placeholder="Name"
            v-model="data.name"
          />
          <div v-if="error.name" class="error">{{ error.name }}</div>
        </div>
        <div class="diplayname">
          <AppTextField
            autofocus
            label="Surname"
            type="text"
            placeholder="Surname"
            v-model="data.surname"
          />
          <div v-if="error.surname" class="error">{{ error.surname }}</div>
        </div>
      </div>
      <div class="diplayname">
        <AppTextField
          autofocus
          label="Email"
          type="email"
          placeholder="Email"
          v-model="data.email"
        />
        <div v-if="error.email" class="error">{{ error.email }}</div>
      </div>
      <div class="diplayname">
        <AppTextField
          autofocus
          label="Password"
          type="password"
          placeholder="Password"
          v-model="data.password"
        />
        <div v-if="error.password" class="error">{{ error.password }}</div>
      </div>
      <div class="diplayname">
        <AppTextField
          autofocus
          label="Confirm Password"
          type="password"
          placeholder="Password"
          v-model="data.confirmPassword"
        />
        <div v-if="error.confirmPassword" class="error">
          {{ error.confirmPassword }}
        </div>
      </div>
      <div class="diplayname">
        <AppTextField
          autofocus
          label="Mobile Number"
          type="Number"
          placeholder="Mobile Number"
          v-model="data.mobileNumber"
        />
        <div v-if="error.mobileNumber" class="error">
          {{ error.mobileNumber }}
        </div>
      </div>
      <div class="diplayname">
        <div class="select-gender-container">
          <label>select gender:</label>
          <div class="input-radio">
            <div class="radio-btn">
              <label for="gender">Male</label>
              <input
                id="gender"
                name="gender"
                v-model="data.gender"
                type="radio"
                value="Male"
              />
            </div>
            <div class="radio-btn">
              <label for="gender">Female</label>
              <input
                id="gender"
                name="gender"
                v-model="data.gender"
                type="radio"
                value="Female"
              />
            </div>
            <div class="radio-btn">
              <label for="gender">Other</label>
              <input
                id="gender"
                name="gender"
                v-model="data.gender"
                type="radio"
                value="Other"
              />
            </div>
          </div>
        </div>
        <div v-if="error.gender" class="error">
          {{ error.gender }}
        </div>
      </div>
      <div class="diplayname">
        <div class="select-gender-container">
          <label>select langauge:</label>
          <div class="input-radio">
            <div class="radio-btn">
              <label for="html">HTML</label>
              <input
                id="html"
                v-model="data.langauge"
                type="checkbox"
                value="HTML"
              />
            </div>
            <div class="radio-btn">
              <label for="css">CSS</label>
              <input
                id="css"
                v-model="data.langauge"
                type="checkbox"
                value="CSS"
              />
            </div>
            <div class="radio-btn">
              <label for="javascript">Java Script</label>
              <input
                id="javascript"
                v-model="data.langauge"
                type="checkbox"
                value="Java Script"
              />
            </div>
            <div class="radio-btn">
              <label for="vuejs">Vue js</label>
              <input
                id="vuejs"
                v-model="data.langauge"
                type="checkbox"
                value="Vue js"
              />
            </div>
            <!-- <div class="radio-btn">
              <label for="langauge">Select All</label>
              <input
                id="langauge"
                v-model="data.langauge"
                type="checkbox"
                @change="selectAllLanguages"
              />
            </div> -->
          </div>
        </div>
        <div v-if="error.langauge" class="error">
          {{ error.langauge }}
        </div>
      </div>
      <div class="diplayname">
        <div class="select-gender-container">
          <label>select cart:</label>
          <select
            name="registerType"
            v-model="data.registerType"
            class="custom-select"
          >
            <option disabled value="">Please select one</option>
            <option value="free">free</option>
            <option value="Paid">Paid</option>
            <option value="Pay later">Pay later</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div v-if="error.registerType" class="error">
          {{ error.registerType }}
        </div>
      </div>

      <div class="submit-btn">
        <VBtn v-on:click="onSubmit">Register</VBtn>
      </div>
      <!-- Other fields can be uncommented as needed -->
    </div>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr class="table-row">
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirm Password</th>
          <th>Mobile Number</th>
          <th>Gender</th>
          <th>langauge</th>
          <th>cart</th>
          <th>delete</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userData" :key="index">
          <td>{{ item?.name }}</td>
          <td>{{ item?.surname }}</td>
          <td>{{ item?.email }}</td>
          <td>{{ item?.password }}</td>
          <td>{{ item?.confirmPassword }}</td>
          <td>{{ item?.mobileNumber }}</td>
          <td>{{ item?.gender }}</td>
          <td>{{ item.langauge.join(",") }}</td>
          <td>{{ item?.registerType }}</td>
          <td>
            <VBtn v-on:click="onDelete(index)">delete</VBtn>
          </td>
          <td>
            <VBtn v-on:click="onEdit(index)">Edit</VBtn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
}

.container-div {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.table-container {
  overflow-x: auto;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  text-align: center;
  width: 100vw;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
  width: 100%;
  min-width: 150px;
}

.name-surname {
  display: flex;
  gap: 10px;
  width: 100%;
}

.submit-btn {
  display: flex;
  justify-content: center;
}

.select-gender-container {
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 14px;
    font-weight: 500;
  }
}

.input-radio {
  display: flex;
  gap: 20px;
}

.radio-btn {
  display: flex;
  gap: 10px;

  input[type="radio"] {
    height: 18px;
    width: 18px;
  }
}

.custom-select {
  width: 100%;
  /* Adjust width as per your design */
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  /* Add any additional styling you need */
}

.diplayname {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.error {
  color: red;
  font-size: 13px;
  font-weight: 400;
}
</style>
