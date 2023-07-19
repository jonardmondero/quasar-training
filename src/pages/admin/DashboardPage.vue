<template>
  <div class="m-auto q-p-sm">
    <q-page>
      <div class="col-6">
        <q-card bordered>
          <q-card-section>
            <q-table
              padding-sm
              title="Users"
              :rows="rows"
              :columns="columns"
              :row-key="rows.id"
            >
              <template v-slot:body-cell-email="props">
                <q-td class="text-red">
                  <q-icon color="indigo" name="person" size="16px" />
                  {{ props.row.email }}
                </q-td>
              </template>
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    @click="handleDialog(props.row)"
                    flat
                    round
                    icon="edit"
                    size="sm"
                    color="positive"
                  />
                  <q-btn
                    flat
                    round
                    icon="delete"
                    size="sm"
                    color="negative"
                    @click="handleDeleteDialog(props.row)"
                  />
                </q-td>
              </template>
            </q-table>
          </q-card-section>
          <q-card-section>
            <p>{{}}</p>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "../../boot/axios";
import { userForm, toggleDelete } from "../../reactive";
import Dialog from "../../dialog/UserDialog.vue";
import DeleteDialog from "../../dialog/DeleteUserDialog.vue";
import { columns } from "../../constants/constants";
const rows = ref([]);

const userDialog = ref(false);
const $q = useQuasar();
async function getUsers() {
  await api.get("/users").then((res) => {
    console.log(res.data);
    rows.value = res.data;
  });
}

getUsers();

function handleDialog(row) {
  userForm.name = row.name;
  userForm.email = row.email;
  userForm.id = row.id;
  userForm.password = row.password;
  // console.log(row);

  $q.dialog({
    component: Dialog,

    // props forwarded to your custom component
    componentProps: {
      // text: "helllooo",
    },
  })
    .onOk(() => {
      console.log("OK");
    })
    .onCancel(() => {
      console.log("Cancel");
    })
    .onDismiss(() => {
      console.log("Called on OK or Cancel");
    });
}
function handleDeleteDialog(info) {
  $q.dialog({
    component: DeleteDialog,
    componentProps: {
      userInfo: info,
      text: "Jonard",
    },
  })
    .onOk(() => {
      console.log("Delete Clicked");
    })
    .onCancel(() => {
      console.log("Cancel");
    })
    .onDismiss(() => {
      console.log("Called on OK or Cancel");
    });
}
</script>
