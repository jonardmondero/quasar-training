<template>
  <q-dialog ref="dialogRef">
    <q-card style="width: 400px">
      <q-card-section>
        <q-form @submit="updateUser" class="q-gutter-y-md">
          <div class="text-h6">Update User</div>
          <q-input
            v-model="userForm.name"
            filled
            placeholder="Type here"
            dense
            :rules="[(val) => !!val || 'Name is required']"
          />
          <q-input
            v-model="userForm.email"
            dense
            outlined
            placeholder="Username"
          />
          <q-input type="password" dense outlined />

          <q-btn
            v-model="userForm.password"
            type="submit"
            label="Save Update"
            class="full-width q-mt-md"
            color="primary"
          />
        </q-form>

        <!-- {{ text }} -->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useQuasar } from "quasar";
import { userForm } from "../reactive.js";
import { useDialogPluginComponent } from "quasar";
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const q = useQuasar();
import { reactive } from "vue";
// import { axios } from "../boot/axios.js";
import { api } from "../boot/axios";

const props = defineProps({
  // text: String,
});
async function updateUser() {
  console.log(userForm);
  await api
    .put("/user/" + userForm.id, {
      name: userForm.name,
      id: userForm.id,
      email: userForm.email,
      password: userForm.password,
    })
    .then((response) => {
      if (response.status == 200) {
        q.notify({
          message: response.data.message,
          color: "positive",
          position: "top-right",
          icon: "check",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      q.notify({
        message: error.response.data.message,
        color: "negative",
        position: "top-right",
        icon: "warning",
      });
    });
}
// console.log(userData);
</script>
