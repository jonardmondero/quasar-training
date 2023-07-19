<template>
  <q-dialog ref="dialogRef">
    <q-card>
      <q-card-section>
        <div class="text-h5">Are you sure you want to delete this user?</div>
        <div class="text-subtitle1 q-mt-lg">{{ userInfo.name }}</div>
      </q-card-section>
      <div class="text-center">
        <q-card-section>
          <q-btn
            @click="DeleteUser(userInfo.id)"
            type="submit"
            label="Delete"
            rounded
            color="negative"
            class="q-mt-md"
          />
        </q-card-section>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { api } from "../boot/axios";
import { ref } from "vue";
import { toggleDelete, userForm } from "../reactive";
const toggleDeleteDialog = ref(false);

import { useDialogPluginComponent } from "quasar";
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const props = defineProps({
  userInfo: Object,
});

async function DeleteUser(id) {
  await api
    .delete("/user/" + id)
    .then((response) => {
      console.log(response.data);
      onDialogOK();
    })
    .catch((error) => {
      console.log(error);
    });
  toggleDelete.toggle = false;
}
</script>
